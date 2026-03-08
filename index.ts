const server = Bun.serve({
  hostname: "0.0.0.0", // Esto es vital para que Coolify lo detecte
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("API de Bun activa y funcionando en Coolify");
  },
});

console.log(`Servidor activo en ${server.hostname}:${server.port}`);