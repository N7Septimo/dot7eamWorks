# dot7eamWorks Résumé

The source for [resume.dot7eamworks.io](https://resume.dot7eamworks.io/), Rodolfo I. Bustamante's infrastructure and cloud operations résumé.

## What this repository contains

- A responsive, accessible, single-page résumé served by a Cloudflare Worker
- A portfolio screen layout that puts selected work first, with component overviews, expandable project cards, and section navigation
- An interactive request-path explorer and an on-demand inspector for real same-origin Worker responses
- Enterprise IT experience, current technical competencies, and selected engineering projects
- Print styling for recruiter-friendly PDF export from the same source content
- Canonical metadata, structured data, `robots.txt`, and `sitemap.xml`
- Security headers, controlled routing, a health endpoint, and Node-based request tests

## Project structure

| Path | Purpose |
| --- | --- |
| `main.js` | Worker routes, headers, résumé markup, and styling |
| `showcase.js` | Screen-only portfolio styles, interactive panels, and the request inspector |
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

The inspector only requests three fixed, read-only routes: `/healthz`, `/robots.txt`, and an intentionally missing route that demonstrates the Worker's controlled 404 response. It runs on demand, times out after eight seconds, and reports round-trip time measured in the visitor's browser. It does not monitor the proxy or request third-party services. The content security policy permits same-origin connections for these checks. The printable résumé excludes the showcase panels and uses the original résumé content.

## Deployment

```bash
npm run deploy:dry
npm run deploy
```

The production custom domain is configured in Cloudflare. Keep secrets out of the repository and use Cloudflare-managed secrets if bindings are added later.
