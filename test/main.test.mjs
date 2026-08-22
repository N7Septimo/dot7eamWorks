import assert from "node:assert/strict";
import test from "node:test";

import worker from "../main.js";

async function request(path = "/", init = {}) {
  return worker.fetch(new Request(`https://resume.dot7eamworks.io${path}`, init));
}

test("serves the current resume", async () => {
  const response = await request();
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^text\/html/);
  assert.match(response.headers.get("content-security-policy"), /frame-ancestors 'none'/);
  assert.match(body, /Rodolfo I\. Bustamante/);
  assert.match(body, /Jan 2021 - Aug 2025/);
  assert.match(body, /Arizona Army National Guard/);
  assert.match(body, /2006 - 2019/);
  assert.match(body, /1995 - 2003/);
  assert.match(body, /Bronze Star Medal/);
  assert.match(body, /more than 6,800/);
  assert.match(body, /Network Architecture and Security/);
  assert.match(body, /AI-Assisted Envoy Control Plane/);
  assert.match(body, /Amazon Robotics\/Kiva/);
  assert.match(body, /ServiceNow daily/);
  assert.match(body, /SLA and MTTR/);
  assert.match(body, /RAM\/DIMM/);
  assert.match(body, /Tableau, Microsoft Power BI, and other operational software/);
  assert.match(body, /Download \/ Print PDF/);
  assert.match(body, /resume-document/);
  assert.match(body, /resume\.dot7eamworks\.io/);
});

test("supports HEAD without a body", async () => {
  const response = await request("/", { method: "HEAD" });

  assert.equal(response.status, 200);
  assert.equal(await response.text(), "");
});

test("reports health without caching", async () => {
  const response = await request("/healthz");
  const payload = await response.json();

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(payload, {
    status: "ok",
    service: "resume",
    release: "2026.08.22.2",
  });
});

test("publishes crawler metadata", async () => {
  const [robots, sitemap] = await Promise.all([
    request("/robots.txt"),
    request("/sitemap.xml"),
  ]);

  assert.match(await robots.text(), /Sitemap: https:\/\/resume\.dot7eamworks\.io\/sitemap\.xml/);
  assert.match(await sitemap.text(), /<loc>https:\/\/resume\.dot7eamworks\.io\/<\/loc>/);
});

test("rejects unsupported methods", async () => {
  const response = await request("/", { method: "POST" });

  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "GET, HEAD");
});

test("redirects workers.dev traffic to the canonical host", async () => {
  const response = await worker.fetch(
    new Request("https://resume.example.workers.dev/projects?source=test"),
  );

  assert.equal(response.status, 308);
  assert.equal(
    response.headers.get("location"),
    "https://resume.dot7eamworks.io/projects?source=test",
  );
});

test("returns a controlled 404", async () => {
  const response = await request("/missing");

  assert.equal(response.status, 404);
  assert.equal(await response.text(), "Not Found\n");
});
