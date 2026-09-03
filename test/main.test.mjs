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
  assert.match(body, /Sergeant \\(E-5\\) - 0331 Machine Gunner/);
  assert.match(body, /3rd Battalion, 1st Marines \\("Thundering Third"\\), Weapons Company, Combined Anti-Armor Team \\(CAAT\\) Platoon/);
  assert.match(body, /Combined Anti-Armor Team \\(CAAT\\) Platoon/);
  assert.match(body, /crew-served weapons, vehicles, and assigned equipment/);
  assert.match(body, /machine-gun teams during mounted and dismounted training/);
  assert.match(body, /nine-month temporary assignment at Camp Margarita Rifle Range/);
  assert.match(body, /rifle instructor and coach/);
  assert.match(body, /weapons-qualification training to more than 6,800 personnel/);
  assert.doesNotMatch(body, /Infantry NCO and Marksmanship Instructor/);
  assert.match(body, /Network Architecture and Security/);
  assert.match(body, /AI-Assisted Envoy Control Plane/);
  assert.match(body, /Amazon Robotics\/Kiva/);
  assert.match(body, /Infrastructure &amp; End-User Support/);
  assert.match(body, /developing practical technical solutions/);
  assert.match(body, /resolving production-impacting faults/);
  assert.match(body, /high-volume ServiceNow incident and request queue/);
  assert.match(body, /SLA tracking/);
  assert.match(body, /meeting individual SLA requirements/);
  assert.doesNotMatch(body, /MTTR/);
  assert.doesNotMatch(body, /server installation|rack-and-stack/);
  assert.match(body, /Network &amp; Infrastructure Support/);
  assert.match(body, /supervised network-hardware replacement/);
  assert.doesNotMatch(body, /hard[ -]?drive|RAM\/DIMM/i);
  assert.match(body, /two formally controlled infrastructure changes \(MCMs\) per week/);
  assert.match(body, /standard operating expectation/);
  assert.match(body, /IT Service &amp; User Support/);
  assert.match(body, /end-user device and software deployment/);
  assert.match(body, /Provisioned, configured, and supported Windows, macOS, and Linux endpoints, thin clients, barcode scanners, workstations/);
  assert.match(body, /network-hardware replacements completed under engineering supervision/);
  assert.match(body, /Microsoft Windows, Apple macOS, Ubuntu Linux/);
  assert.match(body, /Cisco switching and wireless/);
  assert.match(body, /Power BI and Tableau/);
  assert.doesNotMatch(body, /Installed and supported Tableau/);
  assert.match(body, /Team Rubicon/);
  assert.match(body, /Active \| Deployment Scheduled Aug 2026/);
  assert.match(body, /August 2026 deployment/);
  assert.ok(body.indexOf('id="projects"') < body.indexOf('id="volunteer"'));
  assert.ok(body.indexOf('id="volunteer"') < body.indexOf('id="education"'));
  assert.match(body, /chaired technical meetings/);
  assert.match(body, /Project &amp; Technical Leadership/);
  assert.match(body, /new-site build support/);
  assert.match(body, /Cloud, Automation &amp; Observability/);
  assert.match(body, /Led large-scale infrastructure and workflow projects/);
  assert.match(body, /Mentored new OTS team members/);
  assert.match(body, /traveled to new site builds to provide comprehensive on-site IT support/);
  assert.doesNotMatch(body, /Station Infrastructure Reroute|Project Keypad|Dual-WAN Reliability Initiative/);
  assert.doesNotMatch(body, /IDF7|UPS network-card remediation across two additional IDFs/);
  assert.match(body, /Mobile Hard of Hearing standup area/);
  assert.match(body, /automated node health-check prototypes/);
  assert.match(body, /Additional OTS initiatives/);
  assert.match(body, /Independent Technical Projects/);
  assert.doesNotMatch(body, /Operations Automation &amp; Observability|mobile-first monitoring views|technician time-tracking tools|infrastructure inventory workflows|actionable status/);
  assert.match(body, /Download \/ Print PDF/);
  assert.match(body, /resume-document/);
  assert.match(body, /resume\.dot7eamworks\.io/);
  assert.match(body, /#military \\{ break-before: page; \\}/);
  assert.doesNotMatch(body, /#projects \\{ break-before: page; \\}/);
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
    release: "2026.09.03.4",
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
