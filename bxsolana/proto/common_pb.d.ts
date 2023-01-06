// package: common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PriceImpactPercent extends jspb.Message { 
    getPercent(): number;
    setPercent(value: number): PriceImpactPercent;
    getInfinity(): Infinity;
    setInfinity(value: Infinity): PriceImpactPercent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceImpactPercent.AsObject;
    static toObject(includeInstance: boolean, msg: PriceImpactPercent): PriceImpactPercent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceImpactPercent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceImpactPercent;
    static deserializeBinaryFromReader(message: PriceImpactPercent, reader: jspb.BinaryReader): PriceImpactPercent;
}

export namespace PriceImpactPercent {
    export type AsObject = {
        percent: number,
        infinity: Infinity,
    }
}

export class Fee extends jspb.Message { 
    getAmount(): number;
    setAmount(value: number): Fee;
    getMint(): string;
    setMint(value: string): Fee;
    getPercent(): number;
    setPercent(value: number): Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fee.AsObject;
    static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fee;
    static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
    export type AsObject = {
        amount: number,
        mint: string,
        percent: number,
    }
}

export enum Infinity {
    INF_NOT = 0,
    INF_POSITIVE = 1,
    INF_NEGATIVE = 2,
}
