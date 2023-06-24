#!/bin/bash

cd ./build

# protoc path
PROTOC=./protoc

# Set the path to the directory where the .proto file is to be compiled
PROTO_DIR=../../proto

# Set the path to the directory where the .grpc.ts file is to be generated
OUT_DIR=../src/grpc

# Generate the .grpc.ts client code using the protoc command
$PROTOC \
  --plugin="protoc-gen-js=./protoc-gen-js" \
  --plugin="protoc-gen-grpc-web=./protoc-gen-grpc-web" \
  --js_out="import_style=commonjs,binary:$OUT_DIR" \
  --grpc-web_out="import_style=typescript,mode=grpcwebtext:$OUT_DIR" \
  --proto_path=$PROTO_DIR \
  -I=$PROTO_DIR $PROTO_DIR/*.proto
