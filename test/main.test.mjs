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

  assert.ok(body.includes("IT infrastructure professional with 4+ years supporting large enterprise environments, focused on operational continuity, network reliability, and technical problem-solving. Combines hands-on infrastructure experience with modern cloud, networking, and observability practices, backed by formal IT education and military leadership experience."));
  const email = "rudybustamante01@icloud.com";
  assert.equal(body.split("mailto:" + email).length - 1, 3);
  assert.ok(body.includes(">" + email + "</a>"));
  assert.ok(!body.includes("hotmail.com"));
  for (const detail of [
    "IT Support Associate II", "new site builds", "OSI Layers 1–4",
    "identified root causes", "OTS mentoring program", "PMOS 15Y30",
    "Arizona Army National Guard, 1/285", "SMOS 15T3F",
    "Arizona Army National Guard, Western Aviation Training Site",
    "SMOS 11B", "U.S. Marine Corps", "Team Rubicon", "15 credit hours",
    "Bachelor of Science in Information Technology", "Bronze Star Medal",
  ]) {
    assert.ok(body.includes(detail), detail);
  }

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
  assert.deepEqual(payload, { status: "ok", service: "resume", release: "2026.11.13.01" });
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
