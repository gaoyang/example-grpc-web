import { ExampleGrpcServiceClient } from 'example-proto/ExampleServiceClientPb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

const btn = document.createElement('input')
btn.type = 'button'
btn.value = 'call subscribe'
const result = document.createElement('pre')
document.body.appendChild(btn)
document.body.appendChild(result)

const hostname = 'http://localhost:2333'
console.log(`hostname: ${hostname}`)
const client = new ExampleGrpcServiceClient(hostname)

btn.addEventListener('click', () => {
  const call = client.subscribe(new Empty())
  call.on('data', response => {
    result.innerText += response.toObject().message + '\r\n'
  })
})
