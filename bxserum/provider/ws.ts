import { Constants } from "../../utils/constants.js";
import { websocketData } from "../../utils/websocket-iterator.js"
import WebSocket from "ws"
import { GetMarketsRequest, GetMarketsResponse, GetOrderBookRequest, GetOrderbookResponse, GetOrderbooksStreamResponse } from "../proto/messages/api/index.js";
import { Api } from "../proto/services/api/index.js";
import { BaseProvider } from "./base.js";


export class WsProvider extends BaseProvider {
    private socket: WebSocket
    constructor(address: string) {
        super();
        if (address ===""){
            address = Constants.MAINNET_API_WS
        }
        this.socket = new WebSocket(address)        
    };

    getOrderbook = (request: GetOrderBookRequest): Promise<GetOrderbookResponse> => {
        return this.wrapWsSocket("GetOrderbook", request)      
    }

    getOrderbookStream = (request: GetOrderBookRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        
        return this.wrapStreamWsSocket("GetOrderbooksStream", request)    
    }

    getMarkets = (request: GetMarketsRequest): Promise<GetMarketsResponse> => {
        return this.wrapWsSocket("GetMarkets",request)   
    }

    close = () => {
        this.socket.close()
    }

    wsRequest = (method:string, params: any):string =>  {
        return JSON.stringify({            
                jsonrpc: "2.0", 
                id: 1,
                Method: method,
                ID: 1,
                params: params            
        }) 
    }


    private wrapWsSocket(method:string,request: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.socket.onopen = () => {
                this.socket.send(this.wsRequest(method, request));
            };
            this.socket.onmessage = (msg: any) => {
                resolve((msg as MessageEvent).data);
            };

            this.socket.onerror = (err: any) => {
                reject(err);
            };
        });
    }

    private wrapStreamWsSocket(method:string,request: any): Promise<AsyncGenerator<any, any, unknown>> {
        return new Promise((resolve, reject) => {
            this.socket.onopen = () => {
                this.socket.send(this.wsRequest(method, request));
                resolve(websocketData(this.socket));
            };

            this.socket.onerror = (err: any) => {
                reject(err);
            };
        });
    }
}