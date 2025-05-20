Run `main.ts` with `deno run --allow-read --allow-write main.ts`, we get the different errors in macOS and Linux.

On macOS:

```
❯ deno run --allow-read --allow-write main.ts
error: Uncaught (in promise) NotCapable: requires write access
const client = Deno.createHttpClient({
                    ^
    at Object.createHttpClient (ext:deno_fetch/22_http_client.js:95:5)
    at file:///Users/yusuke/Repo/github.com/magurotuna/fetch-on-uds/main.ts:1:21

```

On Linux:

```
➜ deno run --allow-read --allow-write main.ts
HttpClient {}
```

Deno version used:

```
deno 2.3.3 (stable, release, x86_64-unknown-linux-gnu)
v8 13.7.152.6-rusty
typescript 5.8.3
```
