# The Curists Local Site

Run it with:

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4173
```

The home page HTML is saved locally in `index.html`. The server serves downloaded `/themes`, `/sites`, and `/curists` assets first, and lazily proxies any missing same-origin assets or pages from the original site so fonts, responsive images, module scripts, and linked pages keep working locally. Analytics and third-party cookie-loader scripts are disabled in the local mirror.
