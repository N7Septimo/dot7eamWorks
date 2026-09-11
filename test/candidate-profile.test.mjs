import assert from "node:assert/strict";
import test from "node:test";

import { buildCandidateProfile } from "../candidate-profile.js";

test("builds a versioned N7Knock candidate profile", () => {
  const profile = buildCandidateProfile("2026.09.09.8");

  assert.equal(profile.profile_version, "2026.09.09.8");
  assert.equal(profile.candidate_id, "rodolfo-i-bustamante");
  assert.equal(profile.source.system, "dot7eamWorks");
  assert.equal(
    profile.source.profile_url,
    "https://resume.dot7eamworks.io/.well-known/n7knock-candidate.json",
  );
  assert.ok(profile.skills.length >= 10);
  assert.ok(profile.experience.length >= 3);
});

test("keeps candidate evidence free of routine contact and search-policy fields", () => {
  const profile = buildCandidateProfile("test-release");

  function collectKeys(value, keys = new Set()) {
    if (Array.isArray(value)) {
      for (const item of value) collectKeys(item, keys);
    } else if (value && typeof value === "object") {
      for (const [key, child] of Object.entries(value)) {
        keys.add(key.toLowerCase());
        collectKeys(child, keys);
      }
    }
    return keys;
  }

  const keys = collectKeys(profile);
  const forbidden = [
    "telephone",
    "phone",
    "email",
    "street",
    "target_roles",
    "locations",
    "remote_ok",
    "hard_constraints",
  ];

  for (const field of forbidden) {
    assert.ok(!keys.has(field), `candidate profile must not expose ${field}`);
  }
});

test("publishes only reviewed skill status values", () => {
  const profile = buildCandidateProfile("test-release");

  for (const skill of profile.skills) {
    assert.ok(["verified", "claimed"].includes(skill.status));
    assert.notEqual(skill.status, "inferred");
    assert.ok(skill.evidence.length > 0);
  }
});
