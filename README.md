# dot7eamWorks Résumé

The source for [resume.dot7eamworks.io](https://resume.dot7eamworks.io/), Rodolfo I. Bustamante's infrastructure and cloud operations résumé.

## What this repository contains

- A responsive, accessible, single-page résumé served by a Cloudflare Worker
- A résumé-first screen layout that mirrors the printable letter-page document
- Enterprise IT experience, current technical competencies, and selected engineering projects
- Print styling for recruiter-friendly PDF export from the same source content
- Canonical metadata, structured data, `robots.txt`, and `sitemap.xml`
- Security headers, controlled routing, a health endpoint, and Node-based request tests

## Project structure

| Path | Purpose |
| --- | --- |
| `main.js` | Worker routes, headers, résumé markup, and styling |
| `wrangler.jsonc` | Cloudflare Worker configuration and observability |
| `test/main.test.mjs` | Request, routing, metadata, and security tests |

## Local development

```bash
npm ci
npm run dev
```

Wrangler serves the Worker locally, normally at `http://localhost:8787`.

## Validation

```bash
npm run check
```

The check runs JavaScript syntax validation, the request test suite, and a Wrangler dry-run bundle.

## Deployment

```bash
npm run deploy:dry
npm run deploy
```

The production custom domain is configured in Cloudflare. Keep secrets out of the repository and use Cloudflare-managed secrets if bindings are added later.
