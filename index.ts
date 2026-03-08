const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("API de Bun activa");
  },
});

console.log(`Servidor listo en http://localhost:${server.port}`);