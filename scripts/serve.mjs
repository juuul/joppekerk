import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { networkInterfaces } from "node:os";
const root = resolve(process.argv.includes("--dist") ? "dist" : ".");
const port = Number(process.env.PORT || 3001);
const host = process.env.HOST || "0.0.0.0";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};
const server = http.createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    const file = resolve(root, `.${path === "/" ? "/index.html" : path}`);
    const extension = extname(file);
    if (
      !file.startsWith(root + sep) ||
      !types[extension] ||
      path.split("/").some((part) => part.startsWith("."))
    ) {
      res.writeHead(403);
      res.end("Geen toegang");
      return;
    }
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405, { Allow: "GET, HEAD" });
      res.end();
      return;
    }
    const info = await stat(file);
    if (!info.isFile()) throw new Error("Not a file");
    res.writeHead(200, {
      "Content-Type": types[extension],
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Pagina niet gevonden");
  }
});
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Poort ${port} is bezet. Kies een andere poort met PORT=${port + 1} npm run dev.`);
  } else {
    console.error(error.message);
  }
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log(`Local: http://localhost:${port}`);
  if (host === "0.0.0.0") {
    for (const addresses of Object.values(networkInterfaces())) {
      for (const address of addresses || []) {
        if (address.family === "IPv4" && !address.internal) {
          console.log(`Netwerk: http://${address.address}:${port}`);
        }
      }
    }
  }
});
