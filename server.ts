import { serveDir } from "@std/http/file-server";

const servePaths = [
    "", // this is just / which goes to index.html
    //"index.html",
    "form_submit.html",
    "main.css",
    "main.js",
    "sitemap.xml",
].map(x => "/" + x);

Deno.serve((req) => {
    const url = new URL(req.url);
    const pathname = url.pathname;
    //console.log(pathname);

    if (servePaths.includes(pathname)) {
        if (pathname == "/form_submit.html") {
            console.log("form submission");
            console.log(url.searchParams);
            // TODO: add something to send the form submission to John
        }
        
        return serveDir(req, { fsRoot: "./" });
    }

    return new Response("404", { status: 404 });
});
