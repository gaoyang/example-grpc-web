import { ExampleGrpcServiceClient } from './grpc/ExampleServiceClientPb'
const hostname = 'http:localhost:2333'
console.log(`hostname: ${hostname}`)
const client = new ExampleGrpcServiceClient(hostname)
