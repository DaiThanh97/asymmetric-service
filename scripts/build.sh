#!/usr/bin/env bash

OUT_DIR="./src/schemas"
TS_OUT_DIR="./src/schemas"
IN_DIR="./proto"
PROTOC="$(npm bin)/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="$(npm bin)/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="$(npm bin)/grpc_tools_node_protoc_plugin"
RECURSIVE=""

for ((c=0; c<=2; c++))
do  
    $PROTOC \
        -I="./proto" \
        --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
        --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
        --js_out=import_style=commonjs:$OUT_DIR \
        --grpc_out=grpc_js:$OUT_DIR \
        --ts_out=grpc_js:$TS_OUT_DIR \
        "$IN_DIR"$RECURSIVE/*.proto
    RECURSIVE+="/**"
done
