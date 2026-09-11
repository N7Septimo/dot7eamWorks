const CANONICAL_ORIGIN = "https://resume.dot7eamworks.io";

export function buildCandidateProfile(release) {
  return {
    profile_version: release,
    candidate_id: "rodolfo-i-bustamante",
    headline: "Information Technology | Infrastructure & End-User Support",
    source: {
      system: "dot7eamWorks",
      canonical_url: `${CANONICAL_ORIGIN}/`,
      profile_url: `${CANONICAL_ORIGIN}/.well-known/n7knock-candidate.json`,
      release,
    },
    skills: [
      { name: "ServiceNow incident and request management", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "Microsoft 365 administration", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "End-user device and software deployment", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#experience`] },
      { name: "Cisco switching and wireless troubleshooting", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "DNS/DHCP", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "TCP/IP", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "VoIP", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "MDF/IDF support", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "Cat6 and fiber cabling", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "VLAN segmentation", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#summary`] },
      { name: "Controlled change management (MCM)", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#experience`] },
      { name: "AWS EC2, Lambda, and S3", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "Cloudflare Zero Trust, Tunnels, and Workers", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "Envoy", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "Prometheus", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "Python", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "Go", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "JavaScript", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "Bash", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] },
      { name: "Infrastructure as code and automation", status: "verified", evidence: [`${CANONICAL_ORIGIN}/#projects`] }
    ],
    experience: [
      {
        organization: "Amazon Operations Technology Support (OTS)",
        role: "IT Support Associate II",
        summary: "Delivered infrastructure and end-user support across Amazon Operations, supported customers across multiple buildings and remote locations, managed local technical projects and controlled changes, and supported new facility builds.",
        evidence: [`${CANONICAL_ORIGIN}/#experience`]
      },
      {
        organization: "Arizona Army National Guard",
        role: "Staff Sergeant – 15Y Armament/Electrical/Avionics Systems Repairer; 11B Infantryman",
        summary: "Diagnosed and repaired integrated aircraft armament, electrical, fire-control, and avionics systems; applied systematic troubleshooting; led and mentored junior soldiers; and supported deployed operations.",
        evidence: [`${CANONICAL_ORIGIN}/#military`]
      },
      {
        organization: "United States Marine Corps",
        role: "Sergeant (E-5) – 0331 Machine Gunner",
        summary: "Led Marines in a Combined Anti-Armor Team platoon, maintained personnel and equipment accountability, directed mounted and dismounted training, and supported weapons-qualification training during a temporary range assignment.",
        evidence: [`${CANONICAL_ORIGIN}/#military`]
      },
      {
        organization: "Team Rubicon",
        role: "Disaster Response Volunteer",
        summary: "Supports veteran-led disaster preparedness, humanitarian response readiness, and community recovery efforts.",
        evidence: [`${CANONICAL_ORIGIN}/#volunteer`]
      }
    ]
  };
}
