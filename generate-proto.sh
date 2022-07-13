#!/usr/bin/env bash

PROTOBUF_PATH=../serum-api/proto

pb gen ts --entry-path $PROTOBUF_PATH --out-dir=bxserum/proto $PROTOBUF_PATH/api.proto --ext-in-import=".js"


