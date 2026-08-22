const CANONICAL_ORIGIN = "https://resume.dot7eamworks.io";
const RELEASE = "2026.08.22";

const SECURITY_HEADERS = Object.freeze({
  "Content-Security-Policy":
    "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Permissions-Policy":
    "accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
});

const HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#07111f">
  <meta name="description" content="Rodolfo I. Bustamante — USMC veteran and infrastructure operations specialist experienced in enterprise IT, AWS, Cloudflare, networking, observability, and automation.">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <title>Rodolfo I. Bustamante | Infrastructure &amp; Cloud Operations</title>
  <link rel="canonical" href="https://resume.dot7eamworks.io/">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Rodolfo I. Bustamante | Infrastructure &amp; Cloud Operations">
  <meta property="og:description" content="Enterprise IT operations, systems, networking, AWS, Cloudflare, observability, and automation.">
  <meta property="og:url" content="https://resume.dot7eamworks.io/">
  <meta name="twitter:card" content="summary">
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rodolfo I. Bustamante",
      "alternateName": "Rudy Bustamante",
      "jobTitle": "Infrastructure and Cloud Operations Specialist",
      "url": "https://resume.dot7eamworks.io/",
      "email": "mailto:rudybustamante01@icloud.com",
      "telephone": "+1-520-841-3456",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tucson",
        "addressRegion": "AZ",
        "addressCountry": "US"
      },
      "sameAs": ["https://github.com/N7Septimo"],
      "award": "Bronze Star Medal",
      "knowsLanguage": ["English", "Spanish"],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "American Military University"
      }
    }
  </script>
  <style>
    :root {
      color-scheme: dark;
      --bg: #07111f;
      --surface: #0d1b2a;
      --surface-2: #102338;
      --text: #edf4fb;
      --muted: #a9b9ca;
      --accent: #59e0b5;
      --accent-2: #7eafff;
      --border: rgba(169, 185, 202, 0.2);
      --shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
      --radius: 18px;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      --sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background:
        radial-gradient(circle at 8% 0%, rgba(89, 224, 181, 0.13), transparent 27rem),
        radial-gradient(circle at 95% 16%, rgba(126, 175, 255, 0.13), transparent 30rem),
        var(--bg);
      color: var(--text);
      font-family: var(--sans);
      font-size: 16px;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; }
    a:focus-visible,
    button:focus-visible {
      outline: 3px solid var(--accent);
      outline-offset: 3px;
    }

    .skip-link {
      position: fixed;
      left: 1rem;
      top: -5rem;
      z-index: 10;
      padding: 0.75rem 1rem;
      border-radius: 0.6rem;
      background: var(--accent);
      color: #04110d;
      font-weight: 800;
    }
    .skip-link:focus { top: 1rem; }

    .shell {
      width: min(1120px, calc(100% - 2rem));
      margin: 0 auto;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.2rem 0;
      border-bottom: 1px solid var(--border);
    }

    .brand,
    .eyebrow,
    .section-kicker,
    .meta,
    .tag,
    .metric-label {
      font-family: var(--mono);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .brand {
      color: var(--accent);
      font-size: 0.82rem;
      font-weight: 800;
      text-decoration: none;
    }

    nav { display: flex; flex-wrap: wrap; gap: 0.35rem 1rem; }
    nav a {
      color: var(--muted);
      font-size: 0.9rem;
      font-weight: 700;
      text-decoration: none;
    }
    nav a:hover { color: var(--text); }

    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.45fr) minmax(260px, 0.55fr);
      gap: 2rem;
      align-items: stretch;
      padding: 4.6rem 0 2.2rem;
    }

    .hero-main,
    .hero-card,
    .panel,
    .project {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: linear-gradient(145deg, rgba(16, 35, 56, 0.94), rgba(13, 27, 42, 0.94));
      box-shadow: var(--shadow);
    }

    .hero-main { padding: clamp(1.6rem, 4vw, 3.2rem); }
    .eyebrow,
    .section-kicker {
      margin: 0 0 0.85rem;
      color: var(--accent);
      font-size: 0.78rem;
      font-weight: 800;
    }

    h1,
    h2,
    h3,
    p { margin-top: 0; }

    h1 {
      max-width: 12ch;
      margin-bottom: 0.65rem;
      font-size: clamp(2.7rem, 7vw, 5.6rem);
      line-height: 0.96;
      letter-spacing: -0.055em;
    }

    .role {
      margin-bottom: 1.25rem;
      color: var(--accent-2);
      font-family: var(--mono);
      font-size: clamp(1rem, 2vw, 1.22rem);
      font-weight: 700;
    }

    .lead {
      max-width: 68ch;
      margin-bottom: 1.5rem;
      color: #cfdae6;
      font-size: 1.06rem;
    }

    .availability {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1.55rem;
      color: #dffaf1;
      font-size: 0.92rem;
      font-weight: 750;
    }
    .availability::before {
      width: 0.62rem;
      height: 0.62rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 0.3rem rgba(89, 224, 181, 0.14);
      content: "";
    }

    .actions { display: flex; flex-wrap: wrap; gap: 0.7rem; }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 2.8rem;
      padding: 0.65rem 1rem;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: rgba(7, 17, 31, 0.5);
      color: var(--text);
      font: 750 0.88rem/1 var(--sans);
      text-decoration: none;
      cursor: pointer;
    }
    .button.primary {
      border-color: transparent;
      background: var(--accent);
      color: #04110d;
    }
    .button:hover { transform: translateY(-1px); }

    .hero-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.6rem;
    }
    .hero-card h2 {
      margin-bottom: 1.2rem;
      font-size: 1rem;
      letter-spacing: 0.01em;
    }
    .contact-list {
      display: grid;
      gap: 1rem;
      margin: 0;
    }
    .contact-list div { display: grid; gap: 0.15rem; }
    .contact-list dt {
      color: var(--muted);
      font: 700 0.7rem/1.3 var(--mono);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .contact-list dd { margin: 0; font-weight: 700; overflow-wrap: anywhere; }
    .contact-list a { text-decoration-color: rgba(89, 224, 181, 0.5); }
    .hero-note {
      margin: 1.5rem 0 0;
      padding-top: 1.2rem;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.88rem;
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.8rem;
      margin-bottom: 4.6rem;
    }
    .metric {
      min-height: 8.5rem;
      padding: 1.25rem;
      border: 1px solid var(--border);
      border-radius: 1rem;
      background: rgba(13, 27, 42, 0.72);
    }
    .metric strong {
      display: block;
      margin-bottom: 0.3rem;
      color: var(--accent);
      font-size: clamp(1.65rem, 4vw, 2.4rem);
      line-height: 1.1;
    }
    .metric-label { color: var(--muted); font-size: 0.69rem; font-weight: 750; }

    .section { padding: 1rem 0 4.8rem; scroll-margin-top: 1rem; }
    .section-heading {
      display: grid;
      grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
      gap: 2rem;
      align-items: end;
      margin-bottom: 1.7rem;
    }
    .section-heading h2 {
      margin-bottom: 0;
      font-size: clamp(1.9rem, 4vw, 3rem);
      line-height: 1.05;
      letter-spacing: -0.035em;
    }
    .section-heading p { margin-bottom: 0; color: var(--muted); }

    .panel { padding: clamp(1.3rem, 3vw, 2rem); }
    .skill-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }
    .skill-group {
      padding: 1.2rem;
      border: 1px solid var(--border);
      border-radius: 0.9rem;
      background: rgba(7, 17, 31, 0.38);
    }
    .skill-group h3 { margin-bottom: 0.55rem; font-size: 1rem; }
    .skill-group p { margin-bottom: 0; color: var(--muted); font-size: 0.94rem; }

    .timeline { display: grid; gap: 1rem; }
    .job {
      display: grid;
      grid-template-columns: minmax(160px, 0.34fr) minmax(0, 1fr);
      gap: 1.4rem;
      padding: clamp(1.3rem, 3vw, 2rem);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: rgba(13, 27, 42, 0.84);
    }
    .meta { color: var(--accent); font-size: 0.72rem; font-weight: 800; }
    .job h3 { margin-bottom: 0.2rem; font-size: 1.2rem; }
    .company { margin-bottom: 1rem; color: var(--accent-2); font-weight: 750; }
    .job ul { margin: 0; padding-left: 1.15rem; color: #cfdae6; }
    .job li + li { margin-top: 0.55rem; }
    .job li::marker { color: var(--accent); }

    .projects {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    .project { display: flex; flex-direction: column; padding: 1.4rem; }
    .project h3 { margin-bottom: 0.7rem; font-size: 1.08rem; }
    .project p { flex: 1; color: var(--muted); font-size: 0.93rem; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tag {
      padding: 0.3rem 0.48rem;
      border: 1px solid rgba(89, 224, 181, 0.24);
      border-radius: 999px;
      color: #c7f7e7;
      font-size: 0.62rem;
      font-weight: 800;
    }

    .education-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }
    .education-grid h3 { margin-bottom: 0.35rem; }
    .education-grid p { margin-bottom: 0; color: var(--muted); }

    footer {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.8rem 0 2.5rem;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.82rem;
    }
    footer p { margin: 0; }

    @media (max-width: 860px) {
      .hero,
      .section-heading,
      .job { grid-template-columns: 1fr; }
      .metrics { grid-template-columns: repeat(2, 1fr); }
      .projects { grid-template-columns: 1fr; }
      h1 { max-width: 10ch; }
    }

    @media (max-width: 580px) {
      .shell { width: min(100% - 1.1rem, 1120px); }
      .topbar { align-items: flex-start; flex-direction: column; }
      .hero { padding-top: 1.7rem; gap: 0.8rem; }
      .hero-main,
      .hero-card,
      .panel,
      .job,
      .project { border-radius: 1rem; }
      .metrics,
      .skill-grid,
      .education-grid { grid-template-columns: 1fr; }
      .metric { min-height: auto; }
      .actions .button { flex: 1 1 calc(50% - 0.7rem); }
      .section { padding-bottom: 3.4rem; }
      footer { flex-direction: column; }
    }

    @media print {
      :root { color-scheme: light; }
      @page { margin: 0.45in; size: letter; }
      body { background: #fff; color: #111827; font-size: 10.5pt; line-height: 1.42; }
      .shell { width: 100%; }
      .topbar,
      .actions,
      .availability,
      .skip-link { display: none !important; }
      .hero { grid-template-columns: 1.6fr 0.7fr; gap: 0.2in; padding: 0 0 0.18in; }
      .hero-main,
      .hero-card,
      .panel,
      .project,
      .job,
      .metric {
        border: 1px solid #cbd5e1;
        background: #fff;
        box-shadow: none;
        color: #111827;
      }
      .hero-main,
      .hero-card { padding: 0.18in; }
      h1 { max-width: none; margin-bottom: 0.05in; color: #0f172a; font-size: 28pt; }
      h2,
      h3 { color: #0f172a; }
      .lead,
      .job ul,
      .skill-group p,
      .project p,
      .section-heading p,
      .education-grid p,
      .hero-note,
      footer { color: #334155; }
      .role,
      .company { color: #1d4ed8; }
      .eyebrow,
      .section-kicker,
      .meta,
      .metric strong { color: #047857; }
      .metrics { grid-template-columns: repeat(4, 1fr); gap: 0.08in; margin-bottom: 0.22in; }
      .metric { min-height: auto; padding: 0.1in; }
      .metric strong { font-size: 16pt; }
      .section { padding: 0 0 0.24in; }
      .section-heading { grid-template-columns: 0.7fr 1.3fr; gap: 0.2in; margin-bottom: 0.1in; }
      .section-heading h2 { font-size: 18pt; }
      .panel,
      .job,
      .project { padding: 0.14in; break-inside: avoid; }
      .skill-grid,
      .education-grid { grid-template-columns: repeat(2, 1fr); gap: 0.08in; }
      .projects { grid-template-columns: repeat(3, 1fr); gap: 0.08in; }
      .project { font-size: 9pt; }
      .tag { border-color: #94a3b8; color: #334155; }
      footer { padding: 0.14in 0 0; }
      a { text-decoration: none; }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to résumé</a>

  <div class="shell">
    <div class="topbar">
      <a class="brand" href="#main" aria-label="Rodolfo Bustamante résumé home">7CloudWorks / Résumé</a>
      <nav aria-label="Résumé sections">
        <a href="#summary">Summary</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>
    </div>

    <main id="main">
      <header class="hero">
        <div class="hero-main">
          <p class="eyebrow">Information Technology / Infrastructure / Network Operations</p>
          <h1>Rodolfo I. Bustamante</h1>
          <p class="role">USMC &amp; Army National Guard Veteran · Enterprise IT Operations</p>
          <p class="lead">Infrastructure operations specialist with hands-on experience supporting enterprise Windows and Linux environments, Cisco networks, AWS, Cloudflare, observability platforms, automation, and mission-critical avionics. Bronze Star Medal recipient; bilingual in English and Spanish.</p>
          <p class="availability">Open to infrastructure, systems, network, and cloud operations roles</p>
          <div class="actions" aria-label="Contact and résumé actions">
            <a class="button primary" href="mailto:rudybustamante01@icloud.com">Email Rudy</a>
            <a class="button" href="tel:+15208413456">Call</a>
            <a class="button" href="https://github.com/N7Septimo" rel="noreferrer">GitHub</a>
            <button class="button" id="print-resume" type="button">Print / Save PDF</button>
          </div>
        </div>

        <aside class="hero-card" aria-label="Contact details">
          <div>
            <h2>Contact</h2>
            <dl class="contact-list">
              <div>
                <dt>Location</dt>
                <dd>Tucson, Arizona</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href="tel:+15208413456">520-841-3456</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:rudybustamante01@icloud.com">rudybustamante01@icloud.com</a></dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd><a href="https://github.com/N7Septimo" rel="noreferrer">N7Septimo</a></dd>
              </div>
            </dl>
          </div>
          <p class="hero-note">Bronze Star Medal recipient · Bilingual in English and Spanish · Operational discipline and practical automation built for real environments.</p>
        </aside>
      </header>

      <section class="metrics" aria-label="Career impact highlights">
        <div class="metric"><strong>4</strong><span class="metric-label">Tucson Node sites supported</span></div>
        <div class="metric"><strong>1.4M+</strong><span class="metric-label">Square feet of operations</span></div>
        <div class="metric"><strong>200+</strong><span class="metric-label">Stations in cable remediation</span></div>
        <div class="metric"><strong>6,800+</strong><span class="metric-label">Personnel trained</span></div>
      </section>

      <section class="section" id="summary">
        <div class="section-heading">
          <div>
            <p class="section-kicker">01 / Profile</p>
            <h2>Built for uptime.</h2>
          </div>
          <p>More than four years supporting high-velocity enterprise operations, backed by military leadership and independent cloud engineering. Comfortable moving from physical infrastructure and endpoint support to network telemetry, scripting, and edge services.</p>
        </div>

        <div class="panel skill-grid" aria-label="Core competencies">
          <article class="skill-group">
            <h3>Systems &amp; Networking</h3>
            <p>Active Directory, GPO, permissions, Windows, Linux, DNS, DHCP, TCP/IP, Cisco switching and wireless, VoIP.</p>
          </article>
          <article class="skill-group">
            <h3>Cloud &amp; Edge</h3>
            <p>AWS EC2, Lambda, S3, Cloudflare Workers, Zero Trust, Access, Tunnels, and edge deployment workflows.</p>
          </article>
          <article class="skill-group">
            <h3>Observability &amp; Automation</h3>
            <p>Prometheus, Envoy, Python, Go, JavaScript, Bash, Git, GitHub, API integration, monitoring, and operational dashboards.</p>
          </article>
          <article class="skill-group">
            <h3>Technical Operations</h3>
            <p>MDF/IDF support, rack-and-stack, incident response, change management, vendor coordination, hardware lifecycle, backup and recovery, Cat6/fiber cabling, and mentoring.</p>
          </article>
        </div>
      </section>

      <section class="section" id="experience">
        <div class="section-heading">
          <div>
            <p class="section-kicker">02 / Experience</p>
            <h2>Enterprise operations.</h2>
          </div>
          <p>Hands-on ownership across infrastructure, end-user systems, network services, change work, and high-severity troubleshooting.</p>
        </div>

        <div class="timeline">
          <article class="job">
            <div>
              <p class="meta">Jan 2021 — Aug 2025</p>
              <p class="meta">Tucson, Arizona</p>
            </div>
            <div>
              <h3>IT Support Associate II</h3>
              <p class="company">Amazon Operations Technology Support</p>
              <ul>
                <li>Supported the four-site Tucson Node—TUS2, TUS5, SAZ3, and DAZ2—during high-velocity night operations, providing node-level troubleshooting and escalation for infrastructure, endpoints, and operational technology.</li>
                <li>Administered and troubleshot Active Directory policies and permissions, Windows and Linux systems, DNS/DHCP, TCP/IP, Cisco switching and wireless, VoIP, and enterprise peripherals.</li>
                <li>Served as the primary on-site technical lead during night shifts, resolving incidents across OSI Layers 1–7 and coordinating escalations with global networking teams.</li>
                <li>Supported MDF/IDF infrastructure, endpoints, VoIP devices, audiovisual systems, security cameras, structured Cat6/fiber cabling, hardware lifecycle, backup and recovery, and UPS/network change work across a 1.4M+ sq. ft. environment.</li>
                <li>Delivered a 150-station keypad grouped-wave reconfiguration and power/data cable remediation for more than 200 AFE stations while maintaining operational continuity.</li>
                <li>Managed service tickets, vendor repairs, asset deployment, onboarding support, and technical training; developed practical prototypes and automated network-analysis tools to strengthen operational readiness.</li>
                <li>Mentored new OTS team members on SOPs, escalation paths, ticketing logic, and disciplined troubleshooting.</li>
              </ul>
            </div>
          </article>

          <article class="job">
            <div>
              <p class="meta">2006 — 2019</p>
              <p class="meta">Arizona</p>
            </div>
            <div>
              <h3>Staff Sergeant — Armament, Electrical &amp; Avionics Systems Repairer</h3>
              <p class="company">Arizona Army National Guard · MOS 15Y / 11B</p>
              <ul>
                <li>Diagnosed, repaired, and maintained AH-64D armament, electrical, fire-control, and avionics systems using technical publications and controlled maintenance procedures.</li>
                <li>Applied electrical theory and systematic fault isolation to complex integrated systems while maintaining equipment accountability and mission readiness.</li>
                <li>Completed active service supporting Operation Iraqi Freedom and received the Bronze Star Medal for meritorious service.</li>
              </ul>
            </div>
          </article>

          <article class="job">
            <div>
              <p class="meta">1995 — 2003</p>
              <p class="meta">Camp Pendleton, CA</p>
            </div>
            <div>
              <h3>Sergeant — Infantry NCO &amp; Marksmanship Instructor</h3>
              <p class="company">United States Marine Corps · MOS 0331 / 8540</p>
              <ul>
                <li>Led small-unit teams in demanding operational environments while maintaining accountability for personnel and equipment.</li>
                <li>Developed and delivered structured weapons-qualification training for more than 6,800 personnel.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="section-heading">
          <div>
            <p class="section-kicker">03 / Selected Projects</p>
            <h2>Engineering beyond the ticket queue.</h2>
          </div>
          <p>Independent systems that connect cloud infrastructure, telemetry, automation, and secure network operations.</p>
        </div>

        <div class="projects">
          <article class="project">
            <h3>AI-Assisted Envoy Control Plane</h3>
            <p>Built an AWS-hosted Envoy ADS/xDS lab with Prometheus telemetry, a Cloudflare Worker bridge, guarded health analysis, and rollback controls. Added a read-only AI supervisor for evidence-based control-plane decisions.</p>
            <div class="tags"><span class="tag">AWS EC2</span><span class="tag">Envoy</span><span class="tag">xDS</span><span class="tag">Go</span><span class="tag">Prometheus</span></div>
          </article>

          <article class="project">
            <h3>Managed Mobile Network</h3>
            <p>Designed an iOS proxy environment with hosted policy delivery, automated rule updates, Hysteria2 transport, and DNS/routing diagnostics. Investigated cellular-to-Wi-Fi handoff behavior using packet-tunnel telemetry.</p>
            <div class="tags"><span class="tag">Cloudflare</span><span class="tag">Lambda</span><span class="tag">S3</span><span class="tag">Hysteria2</span></div>
          </article>

          <article class="project">
            <h3>Operations Automation &amp; Observability</h3>
            <p>Created mobile-first monitoring views, technician time-tracking tools, infrastructure inventory workflows, and scripts that turn operational signals into concise, actionable status.</p>
            <div class="tags"><span class="tag">Python</span><span class="tag">JavaScript</span><span class="tag">Bash</span><span class="tag">Workers</span></div>
          </article>
        </div>
      </section>

      <section class="section" id="education">
        <div class="section-heading">
          <div>
            <p class="section-kicker">04 / Foundation</p>
            <h2>Education &amp; service.</h2>
          </div>
          <p>Formal information technology study combined with military leadership and continuous hands-on engineering.</p>
        </div>

        <div class="education-grid">
          <article class="panel">
            <p class="meta">Education</p>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>Network Architecture and Security · American Military University · 2014</p>
          </article>
          <article class="panel">
            <p class="meta">Service</p>
            <h3>Bronze Star Medal</h3>
            <p>Meritorious service · Operation Iraqi Freedom · Honorable military service</p>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <p>Rodolfo I. Bustamante · Tucson, Arizona</p>
      <p>Resume release ${RELEASE} · Served at the Cloudflare edge</p>
    </footer>
  </div>

  <script>
    document.getElementById("print-resume").addEventListener("click", () => window.print());
  </script>
</body>
</html>`;

const ROBOTS = `User-agent: *
Allow: /
Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml
`;

const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${CANONICAL_ORIGIN}/</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

function makeResponse(body, { status = 200, contentType, cacheControl, headers: additions } = {}) {
  const headers = new Headers(SECURITY_HEADERS);
  headers.set("Content-Type", contentType);
  headers.set("Cache-Control", cacheControl);
  headers.set("Vary", "Accept-Encoding");

  if (additions) {
    for (const [name, value] of Object.entries(additions)) {
      headers.set(name, value);
    }
  }

  return new Response(body, { status, headers });
}

function publicResponse(body, contentType, status = 200, additions) {
  return makeResponse(body, {
    status,
    contentType,
    cacheControl: "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
    headers: additions,
  });
}

function noStoreResponse(body, contentType, status = 200, additions) {
  return makeResponse(body, {
    status,
    contentType,
    cacheControl: "no-store",
    headers: additions,
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname.endsWith(".workers.dev")) {
      return noStoreResponse(null, "text/plain; charset=UTF-8", 308, {
        Location: `${CANONICAL_ORIGIN}${url.pathname}${url.search}`,
      });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return noStoreResponse("Method Not Allowed\n", "text/plain; charset=UTF-8", 405, {
        Allow: "GET, HEAD",
      });
    }

    const isHead = request.method === "HEAD";

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return publicResponse(isHead ? null : HTML, "text/html; charset=UTF-8");
    }

    if (url.pathname === "/healthz") {
      const payload = JSON.stringify({ status: "ok", service: "resume", release: RELEASE });
      return noStoreResponse(isHead ? null : payload, "application/json; charset=UTF-8");
    }

    if (url.pathname === "/robots.txt") {
      return publicResponse(isHead ? null : ROBOTS, "text/plain; charset=UTF-8");
    }

    if (url.pathname === "/sitemap.xml") {
      return publicResponse(isHead ? null : SITEMAP, "application/xml; charset=UTF-8");
    }

    return noStoreResponse(isHead ? null : "Not Found\n", "text/plain; charset=UTF-8", 404);
  },
};
