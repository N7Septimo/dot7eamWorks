import assert from "node:assert/strict";
import test from "node:test";

import worker from "../main.js";

async function request(path = "/", init = {}) {
  return worker.fetch(
    new Request(`https://resume.dot7eamworks.io${path}`, init),
  );
}

test("serves the current resume", async () => {
  const response = await request();
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^text\/html/);
  assert.match(
    response.headers.get("content-security-policy"),
    /frame-ancestors 'none'/,
  );

  assert.ok(body.includes("Rodolfo I. Bustamante"));
  assert.ok(body.includes("Jan 2021 - Aug 2025"));
  assert.ok(body.includes("Arizona Army National Guard"));
  assert.ok(body.includes("2006 - 2019"));
  assert.ok(body.includes("1995 - 2003"));
  assert.ok(body.includes("Bronze Star Medal"));
  assert.ok(body.includes("30 months of overseas operational experience"));
  assert.ok(body.includes("18 months of Army assignments in the Middle East"));
  assert.ok(body.includes("personnel escorts and convoy operations"));
  assert.ok(body.includes("Completed WESTPAC deployments"));
  assert.ok(body.includes("mobile security, personnel movement, combined-arms operations"));

  assert.ok(body.includes("Sergeant (E-5) - 0331 Machine Gunner"));
  assert.ok(
    body.includes(
      '3rd Battalion, 1st Marines ("Thundering Third"), Weapons Company, Combined Anti-Armor Team (CAAT) Platoon',
    ),
  );
  assert.ok(body.includes("crew-served weapons and equipment"));
  assert.ok(
    body.includes("machine-gun teams during mounted and dismounted training"),
  );
  assert.ok(
    body.includes(
      "nine-month temporary assignment at Camp Margarita Rifle Range",
    ),
  );
  assert.ok(
    body.includes("Instructed Marines on the M16A2, 9mm pistol, and M203"),
  );
  assert.ok(
    body.includes("weapons-qualification training to over 6,800 personnel"),
  );

  assert.ok(!body.includes("Infantry NCO and Marksmanship Instructor"));

  assert.ok(body.includes("Network Architecture and Security"));
  assert.ok(body.includes("AI-Assisted Envoy Control Plane"));
  assert.ok(body.includes("Managed Mobile Network"));
  assert.ok(body.includes("Amazon Robotics/Kiva"));
  assert.ok(body.includes("Infrastructure &amp; End-User Support"));
  assert.ok(body.includes("high-volume ServiceNow incident and request queue"));
  assert.ok(body.includes("two formally controlled infrastructure changes (MCMs) per week"));
  assert.ok(body.includes("IT Service &amp; User Support"));
  assert.ok(body.includes("Network &amp; Infrastructure Support"));
  assert.ok(body.includes("Project &amp; Technical Leadership"));
  assert.ok(body.includes("Cloud, Automation &amp; Observability"));
  assert.ok(body.includes("Mentored new OTS team members"));
  assert.ok(body.includes("Mobile Hard of Hearing standup area"));
  assert.ok(body.includes("automated node health-check prototypes"));
  assert.ok(body.includes("Independent Technical Projects"));
  assert.ok(body.includes("Team Rubicon"));
  assert.ok(body.includes("Download / Print PDF"));
  assert.ok(body.includes("resume-document"));
  assert.ok(body.includes("resume.dot7eamworks.io"));

  assert.ok(!body.includes("MTTR"));
  assert.ok(!/server installation|rack-and-stack/i.test(body));
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
    release: "2026.09.09.2",
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
    new Request(
      "https://resume.example.workers.dev/projects?source=test",
    ),
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
