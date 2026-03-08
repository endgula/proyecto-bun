const server = Bun.serve({
  hostname: "0.0.0.0", // Cambia 'localhost' por esto para que sea accesible externamente
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("API de Bun activa en Coolify");
  },
});

console.log(`Servidor activo en http://${server.hostname}:${server.port}`);