import thenableReject from 'thenable-reject'
import WebSocket from "ws"

//const requestToSubscriptions: Map<number, string> = new Map<number, string>();
export async function* websocketData<TData>(websocket: WebSocket, reqId: number): AsyncGenerator<any, any, unknown> {
	let subscriptionId = ""
	for await (const { data } of websocketEvents(websocket)) {
		const { result, id } = JSON.parse(data.toString())
		if (id) {
			if (id == reqId) {
				subscriptionId = result
				continue
			}
		} else {
			const { params: { subscription, result } } = JSON.parse(data.toString())
			if (subscription && subscriptionId == subscription) {
				yield result
			}
		}
	}
}

export function websocketEvents(websocket: WebSocket): AsyncGenerator<WebSocket.MessageEvent>
export function websocketEvents(websocket: WebSocket, { emitOpen }: { emitOpen: false }): AsyncGenerator<WebSocket.MessageEvent>
export function websocketEvents(websocket: WebSocket, { emitOpen }: { emitOpen: boolean}): AsyncGenerator<WebSocket.Event | WebSocket.MessageEvent>
export function websocketEvents(websocket: WebSocket, { emitOpen = false } = {}): AsyncGenerator<WebSocket.Event | WebSocket.MessageEvent> {
	let done = false
	const values: Array<IteratorResult<WebSocket.MessageEvent | WebSocket.Event> | PromiseLike<never>> = []
	const resolvers: Array<(value: IteratorResult<WebSocket.MessageEvent | WebSocket.Event> | PromiseLike<never>) => void> = []

	const close = () => {
		done = true
		while (resolvers.length > 0) (resolvers.shift() as typeof resolvers[0])({ value: undefined, done: true })
	}

	const push = (data: { value: WebSocket.Event | WebSocket.MessageEvent, done: boolean } | PromiseLike<never>) => {
		if (done) return
		if (resolvers.length > 0) {
			(resolvers.shift() as typeof resolvers[0])(data)
		} else {
			values.push(data)
		}
	}

	const pushError = (error: unknown) => {
		push(thenableReject(error))
		close()
	}

	const pushEvent = (event: WebSocket.Event | WebSocket.MessageEvent) => push({ value: event, done: false })

	const next = (): Promise<IteratorResult<WebSocket.MessageEvent | WebSocket.Event, unknown>> => {
		if (values.length > 0) return Promise.resolve(values.shift() as typeof values[0])
		if (done) return Promise.resolve({ value: undefined, done: true })
		return new Promise(resolve => resolvers.push(resolve))
	}

	const initSocket = () => {
		websocket.addEventListener("close", close)
		websocket.addEventListener("error", pushError)
		websocket.addEventListener("message", pushEvent)
	}

	if (websocket.readyState === WebSocket.CONNECTING) {
		websocket.addEventListener("open", event => {
			if (emitOpen) pushEvent(event)
			initSocket()
		})
	} else {
		initSocket()
	}

	const iterator = {
		[Symbol.asyncIterator]: () => iterator,
		next,
		throw: async (value: unknown) => {
			pushError(value)
			if (websocket.readyState === WebSocket.OPEN) websocket.close()
			return next()
		},
		return: async () => {
			close()
			if (websocket.readyState === WebSocket.OPEN) websocket.close()
			return next()
		},
	}

	return iterator
}