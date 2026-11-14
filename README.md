# dot7eamWorks Résumé

The source for [resume.dot7eamworks.io](https://resume.dot7eamworks.io/), Rodolfo Ivan Bustamante's résumé. The website and printable document use the same content in `main.js`.

## What this repository contains

- A responsive, accessible résumé served by a Cloudflare Worker
- One résumé source for the website and two-page Letter print layout
- The currently supplied work history, job titles, duties, education, and awards
- Print styling for PDF export from the same source content
- Canonical metadata, structured data, `robots.txt`, and `sitemap.xml`
- Security headers, controlled routing, a health endpoint, and Node-based request tests

## Project structure

| Path | Purpose |
| --- | --- |
| `main.js` | Worker routes, headers, résumé markup, and styling |
| `wrangler.jsonc` | Cloudflare Worker configuration and observability |
| `test/main.test.mjs` | Request, routing, metadata, and security tests |

## Résumé requirements

| Requirement | Implementation |
| --- | --- |
| Written in English | English résumé text throughout. |
| Two pages or fewer | Two-page Letter print layout, captured in the [résumé PDF](review/Rodolfo-Ivan-Bustamante-Resume.pdf). |
| Full legal name | Rodolfo Ivan Bustamante, verified against the supplied military records. |
| Phone number | (520) 841-3456. |
| Complete work history with job titles | Includes the supplied Amazon and military work history, with the Guard assignments and their job titles listed under the verified service period. |
| Detailed duties and tasks | Existing duties plus ServiceNow workflow and hardware lifecycle details supported by prior supplied résumé text. |
| MM/DD/YY - MM/DD/YY dates | Amazon: 01/03/21 - 07/30/25; Guard service: 11/17/06 - 11/16/19; USMC active duty: 10/31/95 - 10/30/99. |

The PDF is generated from the same Worker HTML and is not a separate résumé format. See the [source-verification notes](review/resume-verification.md). The military records establish overall service periods; the Guard specialties are identified as assignments held during that service, with no claim that each lasted the entire period.

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

The check runs JavaScript syntax validation and the request test suite locally. The Cloudflare bundle dry run is a separate command and is not run automatically by the PR checks. After changes to content or styling, inspect the exported PDF again for page count and clipping.

## Deployment

```bash
npm run deploy:dry
npm run deploy
```

The production custom domain is configured in Cloudflare. Keep secrets out of the repository and use Cloudflare-managed secrets if bindings are added later.
