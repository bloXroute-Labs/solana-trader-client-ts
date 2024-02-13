import WebSocket from "isomorphic-ws"
import { AsyncBlockingQueue } from "../utils/blockingqueue"

// eslint-disable-next-line
type Resolver = (result: any) => void
type ResolveReject = {
    resolve: Resolver
    reject: Resolver
}
type SubscriptionResolver = {
    update: Resolver
    read: AsyncGenerator<unknown, void, unknown>
    cancel: (err: Error) => void
}
type MessageEvent<T> = {
    data: T
}

export class RpcWsConnection {
    private socket?: WebSocket
    private readonly address: string
    private readonly authHeader: string
    private pingInterval?: NodeJS.Timeout
    private readonly PING_INTERVAL = 30000

    private requestId = 1
    private requestMap: Map<number, ResolveReject> = new Map()
    private subscriptionMap: Map<string, SubscriptionResolver> = new Map()
    // eslint-disable-next-line
    queue: AsyncBlockingQueue<any> = new AsyncBlockingQueue<any>()

    constructor(address: string, authHeader: string) {
        this.address = address
        this.authHeader = authHeader
    }

    async connect() {
        const headers = {
            Authorization: this.authHeader,
            "x-sdk": process.env.PACKAGE_NAME ?? "",
            "x-sdk-version": process.env.PACKAGE_VERSION ?? "",
        }
        const socket = new WebSocket(this.address, {
            headers,
        })

        let connectResolver: (val: undefined) => void
        const connected = new Promise<undefined>((resolve) => {
            connectResolver = resolve
        })

        socket.onopen = () => {
            this.socket = socket
            connectResolver(undefined)
            this.pingInterval = setInterval(
                () => this.sendPing(),
                this.PING_INTERVAL
            )
        }

        socket.onmessage = (msg: unknown) => {
            const { id, result, method, params, error } = JSON.parse(
                (msg as MessageEvent<string>).data
            )

            if (method === "subscribe") {
                const { subscription, result } = params
                const subscriptionResolver =
                    this.subscriptionMap.get(subscription)
                if (subscriptionResolver) {
                    subscriptionResolver.update(result)
                }
            } else if (!method) {
                const rr = this.requestMap.get(id)
                if (rr != null) {
                    const { resolve, reject } = rr
                    if (error == null) {
                        resolve(result)
                    } else {
                        reject(error)
                    }
                    this.requestMap.delete(id)
                } else {
                    this.close()
                    throw new Error(
                        "received an non streaming message on websocket, closing socket"
                    )
                }
            }
        }

        socket.onerror = () => {
            this.socket = undefined
        }

        await connected
    }

    close() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval)
        }
        this.socket?.close()
    }

    async call<T, R>(methodName: string, methodParams: T): Promise<R> {
        if (!this.socket) {
            return Promise.reject(new Error("socket is not connected"))
        }

        const { id, req } = this._formWSRequest(methodName, methodParams)
        this.socket.send(req)

        const callback = new Promise<R>((resolve, reject) => {
            this.requestMap.set(id, { resolve, reject })
        })
        return await callback.catch(({ message, data }) => {
            throw new Error(`RPC error: [${message}] ${data}`)
        })
    }

    _formWSRequest<T>(
        methodName: string,
        methodParams: T
    ): { id: number; req: string } {
        const id = ++this.requestId // iterating the request id by 1 makes it so that we have a unique request ID for each request
        return {
            req: JSON.stringify({
                jsonrpc: "2.0",
                id: id,
                method: methodName,
                params: methodParams,
            }),
            id,
        }
    }

    async subscribe<T>(streamName: string, streamParams: T): Promise<string> {
        const subscriptionId = (await this.call("subscribe", [
            streamName,
            streamParams,
        ])) as string

        const queue = new AsyncBlockingQueue<unknown>()
        const update = (value: unknown) => {
            queue.enqueue(value)
        }

        // eslint-disable-next-line
        const read = (async function* (this: any) {
            while (!queue.isBlocked()) {
                {
                    const value = queue.dequeue()
                    yield value
                }
            }
        })()

        // eslint-disable-next-line
        const cancel = function (this: any, err: Error) {
            this.queue.enqueue(err)
        }

        this.subscriptionMap.set(subscriptionId, {
            cancel,
            read,
            update,
        })

        return Promise.resolve(subscriptionId)
    }

    async unsubscribe(subscriptionId: string): Promise<boolean> {
        await this.call("unsubscribe", subscriptionId)

        return this.subscriptionMap.delete(subscriptionId)
    }

    async *subscribeToNotifications<T>(
        subscriptionID: string
    ): AsyncGenerator<T> {
        const resolver = this.subscriptionMap.get(subscriptionID)

        if (!resolver) {
            throw new Error("subscription does not exist for id")
        }

        const read = resolver.read

        for await (const item of read) {
            yield item as T
        }
    }

    sendPing() {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.ping()
        }
    }
}
