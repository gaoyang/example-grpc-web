using Grpc.Server;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(options => { options.ListenLocalhost(2333); });

builder.Services.AddGrpc();

builder.Services.AddCors(o => o.AddDefaultPolicy(policy =>
{
    policy.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
}));

var app = builder.Build();
app.UseGrpcWeb(new() { DefaultEnabled = true });
app.UseCors();
app.MapGrpcService<ExampleService>();
app.Run();