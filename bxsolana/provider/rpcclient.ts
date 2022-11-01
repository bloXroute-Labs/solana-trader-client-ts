import config from "../../utils/config.js"
import WebSocket from "ws"
import {AsyncBlockingQueue} from "./blockingqueue.js"

type Resolver = (result: any) => void
type SubscriptionResolver = {
    update: Resolver
    read: AsyncGenerator<unknown, void, unknown>
    cancel: (err: Error) => void
}

export class RpcWsConnection {
    private socket?: WebSocket
    private address: string

    private requestId = 1
    private requestMap: Map<number, Resolver> = new Map()
    private subscriptionMap: Map<string, SubscriptionResolver> = new Map()
    queue: AsyncBlockingQueue<any> = new AsyncBlockingQueue<any>()

    constructor(address: string) {
        this.address = address

    }

    async connect() {
        const headers = { Authorization: config.AuthHeader }
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
        }

        socket.onmessage = (msg: unknown) => {
            const { id, result, method, params } = JSON.parse((msg as MessageEvent<string>).data)

            if (method === "subscribe") {
                const { subscription, result } = params
                const subscriptionResolver = this.subscriptionMap.get(subscription)
                if (subscriptionResolver) {
                    subscriptionResolver.update(result)
                }
            } else if (!method) {
                const resolver = this.requestMap.get(id)
                if (resolver) {
                    resolver(result)
                    this.requestMap.delete(id)
                }
            }
            // {"id":1,"result":"c3e01025-a476-4753-a043-d0b61274f76a","jsonrpc":"2.0"}
            // {"method":"subscribe","params":{"subscription":"2baa5fae-c307-43f8-a3ec-cdc00020c5fa","result":{"slot":"157774868","orderbook":{"market":"SOL/USDC","marketAddress":"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT","bids":[{"price":30.759,"size":953.3},{"price":30.783,"size":291.8},{"price":30.792,"size":84.5},{"price":30.798000000000002,"size":757.4},{"price":30.8,"size":993.5},{"price":30.801,"size":675},{"price":30.829,"size":42.2},{"price":30.848,"size":21.1},{"price":30.857,"size":10.5},{"price":30.858,"size":225}],"asks":[{"price":30.903,"size":0.1},{"price":30.937,"size":1435.7},{"price":30.94,"size":93.3},{"price":30.947,"size":0.1},{"price":30.963,"size":339.4},{"price":30.974,"size":280.2},{"price":31.008,"size":530.2},{"price":31.019,"size":10.5},{"price":31.028,"size":21},{"price":31.042,"size":1.5}]}}},"jsonrpc":"2.0"}
        }

        socket.onerror = () => {
            this.socket = undefined
        }

        await connected
    }

    // close() {
    //
    // }

    async call<T, R>(methodName: string, methodParams: T): Promise<R> {
        if (!this.socket) {
            // TODO: figure something out
            return Promise.reject()
        }

        const { id, req } = this._formWSRequest(methodName, methodParams)
        this.socket.send(req)

        const callback = new Promise<R>((resolve, reject) => {
            this.requestMap.set(id, resolve)
        })
        return await callback
    }

    _formWSRequest<T>(methodName: string, methodParams: T): { id: number; req: string } {
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
        const subscriptionId = (await this.call("subscribe", [streamName, streamParams])) as string

        const queue = new AsyncBlockingQueue<unknown>()
        const update = (value: unknown) => {
            queue.enqueue(value)
        }

        const read = (async function* (this: any) {
            while (!(queue.isBlocked())) {{
                const value = queue.dequeue()
                if (value instanceof Error) {
                    throw value
                }
                yield value
            }
        }
        })()

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

    async *subscribeToNotifications<T>(subscriptionID: string): AsyncGenerator<T> {
        const resolver = this.subscriptionMap.get(subscriptionID)

        if (!resolver) {
            throw new Error("subscription does not exist for id")
        }

        const read = resolver.read

        for await (const item of read) {
            yield item as T
        }
        return read
    }
}