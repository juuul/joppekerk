import { cp, mkdir } from "node:fs/promises";
await mkdir("dist", { recursive: true });
for (const file of ["index.html", "styles.css", "app.js", "assets"]) {
  await cp(file, `dist/${file}`, { recursive: true });
}
console.log("Website gebouwd in dist/");
