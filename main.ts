const path = "/tmp/uds.sock";
const resolvedPath = await Deno.realPath(path);
const client = Deno.createHttpClient({
  proxy: {
    transport: "unix",
    path: resolvedPath,
  },
});

console.log(client);
