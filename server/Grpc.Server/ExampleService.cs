using Google.Protobuf.WellKnownTypes;
using Grpc.Core;

namespace Grpc.Server;

internal class ExampleService : ExampleGrpcService.ExampleGrpcServiceBase
{
    public override async Task<LoginResponse> Login(LoginRequest request, ServerCallContext context)
    {
        await Task.Delay(1000).ConfigureAwait(false);

        return new()
        {
            Success = true
        };
    }

    public override async Task Subscribe(Empty request, IServerStreamWriter<SubscribeResponse> responseStream, ServerCallContext context)
    {
        for (var i = 0; i < 10; i++)
        {
            await responseStream.WriteAsync(new()
            {
                Message = $"Message {i}"
            }).ConfigureAwait(false);

            await Task.Delay(1000).ConfigureAwait(false);
        }
    }
}