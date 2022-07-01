import { Constants } from "../../utils/constants.js";
import fetch from "node-fetch"
import { GetOrderBookRequest, GetOrderbookResponse } from "../proto/messages/api/index.js";
import { BaseProvider } from "./base.js";

export class HttpProvider extends BaseProvider {
    private baseUrl:string
    constructor(address: string) {
        super();
        if (address ===""){
            address = Constants.MAINNET_API_HTTP
        }
        this.baseUrl = address + "/api/v1"
        
    };

    getOrderbook = (request: GetOrderBookRequest): Promise<GetOrderbookResponse> => {
        const path = `${this.baseUrl}/market/orderbooks/${request.market}?limit=${request.limit}`
        return fetch(path).then(resp => {
            return resp.json() as any as GetOrderbookResponse
        })
    }

    close = () => {
        //no need
    }
}