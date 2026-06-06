import { createServer } from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { dirname, extname, isAbsolute, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://kaatdm.com";
const ROOT = dirname(fileURLToPath(import.meta.url));
const PORT = Number.parseInt(process.env.PORT ?? "4173", 10);
const INTERNAL_ROUTES = new Set([
  "/services",
  "/weddingsandbaptisms",
  "/corporateevents",
  "/privatecelebrations",
  "/experiences",
  "/about",
  "/merch",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/general-terms-conditions",
]);

const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const textTypes = ["text/html", "text/css", "javascript", "application/json", "image/svg+xml"];
let remoteFetchChain = Promise.resolve();

function sleep(ms) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}

function removeThirdPartyRuntime(html) {
  const cleaned = html
    .replace(/\s*<!-- Start cookieyes banner -->[\s\S]*?<!-- End cookieyes banner -->\s*/i, "\n")
    .replace(/\s*<script defer data-domain="kaatdm\.com" src="https:\/\/plausible\.io\/js\/script\.outbound-links\.tagged-events\.js"><\/script>\s*/i, "\n")
    .replace(/\s*<script>window\.plausible = window\.plausible \|\| function\(\) \{[\s\S]*?\}<\/script>\s*/i, "\n");

  if (cleaned.includes("/local-mirror.css")) {
    return cleaned;
  }

  return cleaned.replace(
    "</head>",
    '<link rel="stylesheet" media="all" href="/themes/jakarta/dist/css/js-fallback.css" />\n<link rel="stylesheet" media="all" href="/local-mirror.css?v=footer-social-buttons" />\n</head>',
  ).replace("</body>", '<script src="/curists-content.js?v=footer-social-buttons" defer></script>\n</body>');
}

function localPath(pathname) {
  const cleanPathname = pathname === "/" ? "/index.html" : pathname;
  const absolutePath = resolve(ROOT, `.${decodeURIComponent(cleanPathname)}`);
  const relativePath = relative(ROOT, absolutePath);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    throw new Error("Refusing to serve a path outside the project root.");
  }
  return absolutePath;
}

function normalizedRoute(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function contentTypeFor(pathname) {
  return mimeTypes[extname(pathname).toLowerCase()] ?? "application/octet-stream";
}

async function exists(pathname) {
  try {
    const details = await stat(pathname);
    return details.isFile();
  } catch {
    return false;
  }
}

async function queuedRemoteFetch(url) {
  const next = remoteFetchChain.then(async () => {
    await sleep(125);
    return fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 KaatDM local static mirror",
        "Accept": "*/*",
      },
    });
  });

  remoteFetchChain = next.catch(() => {});
  return next;
}

async function proxyFromOrigin(requestUrl, pathname) {
  const remoteUrl = new URL(`${pathname}${requestUrl.search}`, ORIGIN);
  const response = await queuedRemoteFetch(remoteUrl);
  const contentType = response.headers.get("content-type") ?? contentTypeFor(pathname);
  const body = Buffer.from(await response.arrayBuffer());

  let servedBody = body;
  if (contentType.includes("text/html")) {
    servedBody = Buffer.from(removeThirdPartyRuntime(body.toString("utf8")));
  }

  if (response.ok && !contentType.includes("text/html")) {
    const destination = localPath(pathname);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, body);
  }

  return {
    body: servedBody,
    headers: {
      "content-type": contentType,
      "cache-control": response.ok ? "public, max-age=3600" : "no-store",
    },
    status: response.status,
  };
}

function sendBuffer(res, status, headers, body, isHead) {
  res.writeHead(status, {
    ...headers,
    "content-length": body.length,
  });
  if (isHead) {
    res.end();
  } else {
    res.end(body);
  }
}

createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method ?? "")) {
    sendBuffer(res, 405, { "content-type": "text/plain; charset=utf-8" }, Buffer.from("Method not allowed"), req.method === "HEAD");
    return;
  }

  const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host}`);
  const isHead = req.method === "HEAD";

  try {
    const pathOnDisk = localPath(requestUrl.pathname);
    if (await exists(pathOnDisk)) {
      res.writeHead(200, {
        "content-type": contentTypeFor(pathOnDisk),
        "cache-control": "no-store",
      });
      if (isHead) {
        res.end();
      } else {
        createReadStream(pathOnDisk).pipe(res);
      }
      return;
    }

    if (INTERNAL_ROUTES.has(normalizedRoute(requestUrl.pathname))) {
      const body = await readFile(localPath("/index.html"));
      sendBuffer(
        res,
        200,
        {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "no-store",
        },
        body,
        isHead,
      );
      return;
    }

    const proxied = await proxyFromOrigin(requestUrl, requestUrl.pathname);
    sendBuffer(res, proxied.status, proxied.headers, proxied.body, isHead);
  } catch (error) {
    sendBuffer(
      res,
      500,
      { "content-type": "text/plain; charset=utf-8" },
      Buffer.from(`Local mirror error: ${error.message}`),
      isHead,
    );
  }
}).listen(PORT, "127.0.0.1", () => {
  console.log(`Kaat DM static mirror running at http://127.0.0.1:${PORT}`);
});
