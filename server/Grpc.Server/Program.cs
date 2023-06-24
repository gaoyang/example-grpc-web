using Grpc.Server;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(options => { options.ListenLocalhost(2333); });

builder.Services.AddGrpc();

var app = builder.Build();
app.UseGrpcWeb();

app.MapGrpcService<ExampleService>();

app.Run();