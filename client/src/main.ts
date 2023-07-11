import { ExampleGrpcServiceClientImpl, GrpcWebImpl } from './grpc/example.js'

const btn = document.createElement('input')
btn.type = 'button'
btn.value = 'call subscribe'
const result = document.createElement('pre')
document.body.appendChild(btn)
document.body.appendChild(result)

const hostname = 'http://localhost:2333'
console.log(`hostname: ${hostname}`)

const rpc = new GrpcWebImpl(hostname, {})
const client = new ExampleGrpcServiceClientImpl(rpc)

btn.addEventListener('click', () => {
  client.Subscribe({}).subscribe(response => {
    result.innerText += response.message + '\r\n'
  })
})
