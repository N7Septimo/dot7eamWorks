import assert from "node:assert/strict";
import test from "node:test";
import { Script } from "node:vm";

import worker from "../main.js";
import { inspectRoute } from "../showcase.js";

const origin = "https://resume.dot7eamworks.io";

test("the inspector exercises the actual Worker routes and security headers", async () => {
  const fetched = [];
  const transport = (path, init) => {
    fetched.push({ path, init });
    return worker.fetch(new Request(new URL(path, origin), init));
  };
  for (const [scenario, path, status] of [
    ["health", "/healthz", 200],
    ["metadata", "/robots.txt", 200],
    ["missing", "/showcase-missing-route", 404],
  ]) {
    let elapsed = 0;
    const result = await inspectRoute(scenario, transport, () => (elapsed += 25));
    assert.equal(result.path, path);
    assert.equal(result.status, status);
    assert.equal(result.valid, true);
    assert.equal(result.elapsed, 25);
    const headers = Object.fromEntries(result.headers);
    assert.match(headers["content-security-policy"], /connect-src 'self';/);
    assert.match(headers["content-security-policy"], /frame-ancestors 'none';/);
    assert.equal(headers["x-content-type-options"], "nosniff");
    if (scenario === "health") {
      assert.equal(JSON.parse(result.body).status, "ok");
      assert.equal(headers["cache-control"], "no-store");
    }
    if (scenario === "missing") assert.equal(result.body, "Not Found\n");
  }
  assert.equal(fetched.length, 3);
  for (const { init } of fetched) {
    assert.equal(init.method, "GET");
    assert.equal(init.credentials, "omit");
    assert.equal(init.redirect, "error");
    assert.equal(init.cache, "no-store");
    assert.ok(init.signal instanceof AbortSignal);
  }
});

test("the inspector rejects arbitrary URLs and inherited object keys before requesting", async () => {
  for (const scenario of ["https://example.com", "/private", "__proto__", "constructor"]) {
    await assert.rejects(inspectRoute(scenario, () => assert.fail("Must not send a request")), /available routes/);
  }
});

test("a 200 status alone does not make the health response valid", async () => {
  for (const body of ["<html>error</html>", "null", '{"status":"ok"}', '{"status":"error","service":"resume","release":"1"}']) {
    const result = await inspectRoute("health", async () => new Response(body));
    assert.equal(result.status, 200);
    assert.equal(result.valid, false);
  }
});

test("unexpected statuses and transport failures are reported without fabricated results", async () => {
  const result = await inspectRoute("metadata", async () => new Response("Unavailable", { status: 503 }));
  assert.equal(result.valid, false);
  assert.equal(result.status, 503);
  assert.equal(result.body, "Unavailable");
  await assert.rejects(inspectRoute("health", async () => { throw new TypeError("Network unavailable"); }), /Network unavailable/);
});

test("the browser scripts embedded in the rendered page parse as JavaScript", async () => {
  const response = await worker.fetch(new Request(origin));
  const html = await response.text();
  let scripts = 0;
  for (const [, attributes, contents] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (attributes.includes("application/ld+json")) {
      JSON.parse(contents);
    } else {
      new Script(contents);
      scripts += 1;
    }
  }
  assert.equal(scripts, 1);
});
