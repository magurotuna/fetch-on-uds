const client = Deno.createHttpClient({
  proxy: {
    transport: "unix",
    path: "/tmp/uds.sock",
  },
});

console.log(client);
