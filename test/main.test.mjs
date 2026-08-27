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
  assert.match(body, /two formally controlled infrastructure changes \(MCMs\) per week/);
  assert.match(body, /two 5000VA UPS units at IDF7/);
  assert.match(body, /UPS network-card remediation across two additional IDFs/);
  assert.match(body, /End-user provisioning/);
  assert.match(body, /Microsoft Windows, Apple macOS, Ubuntu Linux/);
  assert.match(body, /provisioned, installed, and validated Cisco switching and wireless equipment/);
  assert.match(body, /Tableau, Microsoft Power BI, and other operational software/);
  assert.match(body, /Team Rubicon/);
  assert.match(body, /Active \| Deployment Scheduled Aug 2026/);
  assert.match(body, /August 2026 deployment/);
  assert.ok(body.indexOf('id="projects"') < body.indexOf('id="volunteer"'));
  assert.ok(body.indexOf('id="volunteer"') < body.indexOf('id="education"'));
  assert.match(body, /Led recurring technical meetings/);
  assert.match(body, /Service Management, Project Management &amp; Leadership/);
  assert.match(body, /Managed Tucson Node infrastructure projects/);
  assert.match(body, /200\+ stations in AFE 1, AFE 2, and Smalls/);
  assert.match(body, /grouped-wave update across 150 keypads/);
  assert.match(body, /WAN1\/WAN2 demarc power remediation with two 1000VA UPS units/);
  assert.match(body, /Mobile Hard of Hearing standup area/);
  assert.match(body, /automated node health-check prototypes/);
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
    release: "2026.08.27.3",
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
