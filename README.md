# The Curists Local Site

This workspace contains a local site built from the `https://kaatdm.com/` structure, with the visible text and media replaced by The Curists content and assets from `http://127.0.0.1:5175/`.

Run it with:

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4173
```

The home page HTML is saved locally in `index.html`. The server serves downloaded `/themes`, `/sites`, and `/curists` assets first, and lazily proxies any missing same-origin assets or pages from the original site so fonts, responsive images, module scripts, and linked pages keep working locally. Analytics and third-party cookie-loader scripts are disabled in the local mirror.
