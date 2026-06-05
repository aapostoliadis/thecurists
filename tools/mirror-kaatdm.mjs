import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://kaatdm.com";
const outputPath = "index.html";

const seen = new Set();
const queue = [];

const htmlEntities = new Map([
  ["amp", "&"],
  ["quot", "\""],
  ["#039", "'"],
  ["apos", "'"],
]);

function decodeEntities(value) {
  return value.replace(/&([^;]+);/g, (match, entity) => htmlEntities.get(entity) ?? match);
}

function localFilePath(url) {
  const parsed = new URL(url, ORIGIN);
  return join(".", decodeURIComponent(parsed.pathname));
}

function enqueue(url, base = ORIGIN) {
  if (!url) return;

  const cleaned = decodeEntities(url.trim()).replace(/^['"]|['"]$/g, "");
  if (
    !cleaned ||
    cleaned.startsWith("#") ||
    cleaned.startsWith("data:") ||
    cleaned.startsWith("mailto:") ||
    cleaned.startsWith("tel:")
  ) {
    return;
  }

  let parsed;
  try {
    parsed = new URL(cleaned, base);
  } catch {
    return;
  }

  if (parsed.origin !== ORIGIN) return;
  const leaf = parsed.pathname.split("/").pop() ?? "";
  if (!leaf.includes(".")) return;

  const key = parsed.href;
  if (seen.has(key)) return;
  seen.add(key);
  queue.push(parsed);
}

function collectFromSrcset(srcset, base) {
  for (const entry of decodeEntities(srcset).split(",")) {
    const [candidate] = entry.trim().split(/\s+/);
    enqueue(candidate, base);
  }
}

function collectFromMarkup(markup, base = ORIGIN) {
  for (const match of markup.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) {
    enqueue(match[1], base);
  }

  for (const match of markup.matchAll(/\bsrcset=["']([^"']+)["']/gi)) {
    collectFromSrcset(match[1], base);
  }
}

function collectFromCss(css, base) {
  for (const match of css.matchAll(/url\(([^)]+)\)/gi)) {
    enqueue(match[1], base);
  }

  for (const match of css.matchAll(/@import\s+(?:url\()?["']?([^"')\s]+)["']?\)?/gi)) {
    enqueue(match[1], base);
  }
}

function collectFromJs(js, base) {
  for (const match of js.matchAll(/\bimport\s*(?:[^"'()]*?\s+from\s*)?["']([^"']+)["']/g)) {
    enqueue(match[1], base);
  }

  for (const match of js.matchAll(/\bimport\(\s*["']([^"']+)["']\s*\)/g)) {
    enqueue(match[1], base);
  }
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
    '<link rel="stylesheet" media="all" href="/themes/jakarta/dist/css/js-fallback.css" />\n<link rel="stylesheet" media="all" href="/local-mirror.css" />\n</head>',
  ).replace("</body>", '<script src="/curists-content.js" defer></script>\n</body>');
}

async function downloadAsset(assetUrl) {
  const destination = localFilePath(assetUrl.href);
  await mkdir(dirname(destination), { recursive: true });

  const response = await fetch(assetUrl.href);
  if (!response.ok) {
    console.warn(`Skipped ${assetUrl.href} (${response.status})`);
    return;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, buffer);

  const contentType = response.headers.get("content-type") ?? "";
  const textTypes = ["text/css", "javascript", "application/json", "image/svg+xml", "text/plain"];
  if (!textTypes.some((type) => contentType.includes(type))) return;

  const text = buffer.toString("utf8");
  if (contentType.includes("text/css") || assetUrl.pathname.endsWith(".css")) {
    collectFromCss(text, assetUrl.href);
  } else if (contentType.includes("javascript") || assetUrl.pathname.endsWith(".js")) {
    collectFromJs(text, assetUrl.href);
  } else if (assetUrl.pathname.endsWith(".svg")) {
    collectFromMarkup(text, assetUrl.href);
  }
}

const sourceResponse = await fetch(ORIGIN);
if (!sourceResponse.ok) {
  throw new Error(`Unable to fetch ${ORIGIN}: ${sourceResponse.status}`);
}

const source = await sourceResponse.text();
const index = removeThirdPartyRuntime(source);
await writeFile(outputPath, index);

collectFromMarkup(index);

while (queue.length > 0) {
  const assetUrl = queue.shift();
  await downloadAsset(assetUrl);
}

console.log(`Mirrored ${seen.size} same-origin assets.`);
