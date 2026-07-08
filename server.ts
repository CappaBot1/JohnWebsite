import { serveDir } from "@std/http/file-server";

const servePaths = [
    "", // this is just / which goes to index.html
    //"index.html",
    "main.css",
    "main.js",
].map(x => "/" + x);

Deno.serve((req) => {
    const pathname = new URL(req.url).pathname;
    //console.log(pathname);

    if (servePaths.includes(pathname)) {
        return serveDir(req, { fsRoot: "./" });
    }

    return new Response("404", { status: 404 });
});
