import assert from "node:assert/strict";
import test from "node:test";

import worker from "../main.js";

async function request(path = "/", init = {}) {
  return worker.fetch(
    new Request(`https://resume.dot7eamworks.io${path}`, init),
  );
}

test("serves the lean infrastructure resume", async () => {
  const response = await request();
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^text\/html/);
  assert.match(
    response.headers.get("content-security-policy"),
    /frame-ancestors 'none'/,
  );

  assert.ok(body.includes("Rodolfo I. Bustamante"));
  assert.ok(body.includes("Infrastructure Operations"));
  assert.ok(body.includes("4+ years of mission-critical hardware and network support"));
  assert.ok(body.includes("Amazon Operations Technology Support (OTS)"));
  assert.ok(body.includes("Jan 2021 – Aug 2025"));
  assert.ok(body.includes("20+ ServiceNow incidents per four-shift block"));
  assert.ok(body.includes("Boston and New Orleans"));

  assert.ok(body.includes("Independent Cloud &amp; Network Lab"));
  assert.ok(body.includes("Envoy ADS/xDS control plane"));
  assert.ok(body.includes("Cloudflare Worker bridge"));
  assert.ok(body.includes("Hysteria2"));
  assert.ok(body.includes("cellular-to-Wi-Fi transition analysis"));

  assert.ok(body.includes("Arizona Army National Guard"));
  assert.ok(body.includes("18-month deployment in support of Operation Iraqi Freedom"));
  assert.ok(body.includes("convoy security, escort, route-clearance, and personnel-security operations"));
  assert.ok(body.includes("community-engagement missions to rebuild local trust"));
  assert.ok(body.includes("U.S. Marine Corps – 3rd Battalion, 1st Marines"));
  assert.ok(body.includes("Combined Anti-Armor Team section"));
  assert.ok(body.includes("more than 6,800 military personnel"));

  assert.ok(body.includes("Bachelor of Science in Information Technology (Network Architecture)"));
  assert.ok(body.includes("Bronze Star Medal"));
  assert.ok(body.includes("Team Rubicon – Active Volunteer / Disaster Response"));

  assert.ok(!body.includes("30 months of overseas operational experience"));
  assert.ok(!body.includes("Led Marines in a Combined Anti-Armor Team platoon"));
  assert.ok(!body.includes("AI-Assisted Envoy Control Plane"));
  assert.ok(!body.includes("Infrastructure &amp; End-User Support"));
  assert.ok(!/CRAC|critical-facilities|rack-and-stack/i.test(body));
});

test("keeps the site navigation aligned to lean resume sections", async () => {
  const response = await request();
  const body = await response.text();

  for (const section of ["summary", "skills", "experience", "projects", "military", "education"]) {
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
  assert.deepEqual(payload, {
    status: "ok",
    service: "resume",
    release: "2026.09.15.2",
  });
});

test("publishes crawler metadata", async () => {
  const [robots, sitemap] = await Promise.all([
    request("/robots.txt"),
    request("/sitemap.xml"),
  ]);

  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
  assert.match(
    await robots.text(),
    /Sitemap: https:\/\/resume\.dot7eamworks\.io\/sitemap\.xml/,
  );
  assert.match(
    await sitemap.text(),
    /<loc>https:\/\/resume\.dot7eamworks\.io\/<\/loc>/,
  );
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
