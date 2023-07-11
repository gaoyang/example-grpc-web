#!/bin/bash

cd ./build

# protoc path
PROTOC=./protoc

# Set the path to the directory where the .proto file is to be compiled
PROTO_DIR=../../proto

# Set the path to the directory where the .grpc.ts file is to be generated
# Introduce the project by means of npm packages to avoid the problem that vite cannot handle commonjs
OUT_DIR=../src/grpc

if [ -d "$OUT_DIR" ]; then
  rm -r "$OUT_DIR"
fi
mkdir "$OUT_DIR"

# Generate the .grpc.ts client code using the protoc command
$PROTOC \
  --plugin="../node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_opt=outputClientImpl=grpc-web \
  --ts_proto_out=$OUT_DIR \
  -I=$PROTO_DIR $PROTO_DIR/*.proto
