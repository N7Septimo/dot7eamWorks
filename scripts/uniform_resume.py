from pathlib import Path
import re

main = Path("main.js")
text = main.read_text()

text = text.replace('const RELEASE = "2026.09.09.6";', 'const RELEASE = "2026.09.09.7";', 1)
text = text.replace('Jan 2021 - Aug 2025', 'Jan 2021 – Aug 2025')
text = text.replace('2006 - 2019', '2006 – 2019')
text = text.replace('1995 - 2003', '1995 – 2003')
text = text.replace(
    'Staff Sergeant - 15Y Armament/Electrical/Avionics Systems Repairer; 11B Infantryman',
    'Staff Sergeant – 15Y Armament/Electrical/Avionics Systems Repairer; 11B Infantryman',
)
text = text.replace(
    'Sergeant (E-5) - 0331 Machine Gunner',
    'Sergeant (E-5) – 0331 Machine Gunner',
)

old_summary = (
    "This includes 18 months of Army assignments in the Middle East conducting "
    "personnel escort and convoy operations, plus Marine Corps WESTPAC deployments."
)
new_summary = (
    "This includes an 18-month Army deployment in the Middle East supporting "
    "personnel movement and convoy security, plus Marine Corps WESTPAC deployments."
)
if old_summary not in text:
    raise SystemExit("Expected summary deployment sentence not found")
text = text.replace(old_summary, new_summary, 1)

list_pattern = re.compile(r'          <ul class="resume-list">\n.*?          </ul>', re.S)
matches = list(list_pattern.finditer(text))
if len(matches) != 4:
    raise SystemExit(f"Expected 4 resume-list blocks, found {len(matches)}")

amazon = '''          <ul class="resume-list">
            <li>Supported a 24/7 Amazon Robotics/Kiva environment while managing a high-volume ServiceNow incident and request queue, prioritizing restoration, SLA compliance, and continuous operations.</li>
            <li>Executed two formally controlled infrastructure changes (MCMs) per week, carrying each from planning and approval through implementation, verification, documentation, and rollback readiness.</li>
            <li>Provisioned and supported Windows, macOS, and Linux endpoints, thin clients, barcode scanners, and workstations while performing Cisco, Active Directory, imaging, and endpoint hardening tasks.</li>
            <li>Led infrastructure and workflow projects, mentored new OTS team members, supported new site builds, and delivered a Mobile Hard of Hearing standup area plus automated node health-check prototypes.</li>
          </ul>'''

army = '''          <ul class="resume-list">
            <li>Diagnosed and repaired AH-64D armament, electrical, fire-control, and avionics systems using technical publications, controlled maintenance procedures, and systematic fault isolation.</li>
            <li>Applied electrical theory and disciplined troubleshooting across complex integrated systems while maintaining equipment accountability, safety, and mission readiness.</li>
            <li>Conducted route, personnel, and convoy security operations during an 18-month deployment in the Middle East in support of Operation Iraqi Freedom.</li>
            <li>Mentored and led junior soldiers through tactical and technical standards, reinforcing equipment accountability, disciplined execution, and mission continuity throughout deployed operations.</li>
          </ul>'''

marines = '''          <ul class="resume-list">
            <li>Completed WESTPAC deployments with Weapons Company, 3rd Battalion, 1st Marines, supporting mobile security, personnel movement, combined-arms operations, and mission readiness.</li>
            <li>Led Marines in a Combined Anti-Armor Team platoon, maintaining accountability for personnel, crew-served weapons and equipment while enforcing training and readiness standards.</li>
            <li>Directed machine-gun teams during mounted and dismounted training, coordinating movement, security, fields of fire, inspections, preventive maintenance, and integration with platoon leadership.</li>
            <li>Instructed Marines on the M16A2, 9mm pistol, and M203 during a nine-month temporary assignment at Camp Margarita Rifle Range, delivering weapons-qualification training to over 6,800 personnel.</li>
          </ul>'''

volunteer = '''          <p class="role-summary">Supports Team Rubicon's veteran-led disaster-response network through disaster preparedness, humanitarian response readiness, and community recovery efforts.</p>'''

replacements = [amazon, army, marines, volunteer]
for match, replacement in reversed(list(zip(matches, replacements))):
    text = text[:match.start()] + replacement + text[match.end():]

text = text.replace('<article class="position">', '<article class="position primary-role">', 3)
main.write_text(text)

tests = Path("test/main.test.mjs")
t = tests.read_text()
t = t.replace('Jan 2021 - Aug 2025', 'Jan 2021 – Aug 2025')
t = t.replace('2006 - 2019', '2006 – 2019')
t = t.replace('1995 - 2003', '1995 – 2003')
t = t.replace('Sergeant (E-5) - 0331 Machine Gunner', 'Sergeant (E-5) – 0331 Machine Gunner')
t = t.replace(
    'assert.ok(body.includes("30 months of overseas operational experience"));',
    'assert.ok(body.includes("30 months of overseas operational experience"));\n'
    '  assert.ok(body.includes("an 18-month Army deployment in the Middle East supporting personnel movement and convoy security"));',
)
t = t.replace('release: "2026.09.09.6",', 'release: "2026.09.09.7",')

uniformity_test = r'''

test("keeps primary resume roles structurally uniform", async () => {
  const response = await request();
  const body = await response.text();
  const roles = [...body.matchAll(/<article class="position primary-role">([\s\S]*?)<\/article>/g)];

  assert.equal(roles.length, 3);

  for (const [, role] of roles) {
    const bullets = [...role.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((match) =>
      match[1].replace(/<[^>]+>/g, "").trim(),
    );

    assert.equal(bullets.length, 4);

    for (const bullet of bullets) {
      assert.ok(bullet.endsWith("."));
      const wordCount = bullet.match(/\b[\w/-]+\b/g)?.length ?? 0;
      assert.ok(
        wordCount >= 18 && wordCount <= 28,
        `Expected 18-28 words, got ${wordCount}: ${bullet}`,
      );
    }
  }

  const projectBlock = body.match(/<ul class="project-list">([\s\S]*?)<\/ul>/)?.[1] ?? "";
  assert.equal((projectBlock.match(/<li>/g) ?? []).length, 2);
  assert.equal((body.match(/<p><strong>[^<]+:<\/strong>/g) ?? []).length, 4);
  assert.equal((body.match(/class="education-line"/g) ?? []).length, 2);
  assert.equal((body.match(/class="role-summary"/g) ?? []).length, 1);
  assert.ok(!body.includes("Jan 2021 - Aug 2025"));
  assert.ok(!body.includes("2006 - 2019"));
  assert.ok(!body.includes("1995 - 2003"));
});
'''

marker = '\ntest("supports HEAD without a body"'
if marker not in t:
    raise SystemExit("Test insertion marker not found")
t = t.replace(marker, uniformity_test + marker, 1)
tests.write_text(t)
