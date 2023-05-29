/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.2
// source: example.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as example_pb from './example_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ExampleGrpcServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/ExampleGrpcService/Login',
    grpcWeb.MethodType.UNARY,
    example_pb.LoginRequest,
    example_pb.LoginResponse,
    (request: example_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    example_pb.LoginResponse.deserializeBinary
  );

  login(
    request: example_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<example_pb.LoginResponse>;

  login(
    request: example_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: example_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<example_pb.LoginResponse>;

  login(
    request: example_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: example_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ExampleGrpcService/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ExampleGrpcService/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorSubscribe = new grpcWeb.MethodDescriptor(
    '/ExampleGrpcService/Subscribe',
    grpcWeb.MethodType.SERVER_STREAMING,
    google_protobuf_empty_pb.Empty,
    example_pb.SubscribeResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    example_pb.SubscribeResponse.deserializeBinary
  );

  subscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<example_pb.SubscribeResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ExampleGrpcService/Subscribe',
      request,
      metadata || {},
      this.methodDescriptorSubscribe);
  }

}
