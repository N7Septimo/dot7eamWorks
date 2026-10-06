import assert from "node:assert/strict";
import test from "node:test";

import worker from "../main.js";

async function request(path = "/", init = {}) {
  return worker.fetch(new Request(`https://resume.dot7eamworks.io${path}`, init));
}

test("serves the PDF-based resume while preserving the Amazon section", async () => {
  const response = await request();
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^text\/html/);
  assert.match(response.headers.get("content-security-policy"), /frame-ancestors 'none'/);

  assert.ok(body.includes("Former U.S. Marine and current M.S. IT student"));
  assert.ok(body.includes("electrical theory and rotary-wing aircraft avionics"));
  assert.ok(body.includes("US_MARINES911@hotmail.com"));
  assert.ok(body.includes("1422 Calle Tordo, Rio Rico, Arizona"));

  assert.ok(body.includes("IT Support Associate II"));
  assert.ok(body.includes("Provided primary on-site IT support for TUS2"));
  assert.ok(body.includes("Reintroduced the Demarcation Power Remediation Project"));
  assert.ok(body.includes("Traveled to new Amazon site builds"));
  assert.ok(!body.includes("TUS5"));

  assert.ok(body.includes("Armament Aircraft Maintenance Technician"));
  assert.ok(body.includes("AH-64D avionics"));
  assert.ok(body.includes("ULLS-A(E)"));
  assert.ok(body.includes("Crew Chief – 15T3F UH-60 Helicopter"));
  assert.ok(body.includes("Unmanned Aircraft Aircrew Training Program"));
  assert.ok(body.includes("U.S. Soldier – Enlisted"));
  assert.ok(body.includes("100% mission success"));
  assert.ok(body.includes("U.S. Marine – Enlisted"));
  assert.ok(body.includes("foreign military and security forces"));
  assert.ok(body.includes("qualifications and matches"));

  assert.ok(body.includes("Volunteer – Disaster Humanitarian Aid"));
  assert.ok(body.includes("Team Rubicon mobilizes veterans"));
  assert.ok(body.includes("Bachelor of Science in Information Technology (2014 graduate)"));
  assert.ok(body.includes("Current student in M.S. Information Technology Project Management"));
  assert.ok(body.includes("Certificates in Network Security"));
  assert.ok(body.includes("Bronze Star Medal"));
  assert.ok(body.includes("wartime combat operations"));

  assert.ok(!body.includes("Independent Cloud &amp; Network Project"));
  assert.ok(!body.includes("Technical Skills"));
});

test("keeps navigation aligned with the resume sections", async () => {
  const response = await request();
  const body = await response.text();

  for (const section of ["summary", "experience", "community", "education", "awards"]) {
    assert.ok(body.includes(`id="${section}"`));
    assert.ok(body.includes(`href="#${section}"`));
  }

  assert.ok(body.includes("Download / Print PDF"));
  assert.ok(body.includes("resume-document"));
  assert.ok(body.includes("resume.dot7eamworks.io"));
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
  assert.deepEqual(payload, { status: "ok", service: "resume", release: "2026.10.06.04" });
});

test("publishes crawler metadata", async () => {
  const [robots, sitemap] = await Promise.all([request("/robots.txt"), request("/sitemap.xml")]);

  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/resume\.dot7eamworks\.io\/sitemap\.xml/);
  assert.match(await sitemap.text(), /<loc>https:\/\/resume\.dot7eamworks\.io\/<\/loc>/);
});

test("rejects unsupported methods", async () => {
  const response = await request("/", { method: "POST" });
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "GET, HEAD");
});

test("redirects workers.dev traffic to the canonical host", async () => {
  const response = await worker.fetch(new Request("https://resume.example.workers.dev/projects?source=test"));
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "https://resume.dot7eamworks.io/projects?source=test");
});

test("returns a controlled 404", async () => {
  const response = await request("/missing");
  assert.equal(response.status, 404);
  assert.equal(await response.text(), "Not Found\n");
});
