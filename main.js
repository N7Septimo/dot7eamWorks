const CANONICAL_ORIGIN = "https://resume.dot7eamworks.io";
const RELEASE = "2026.09.03.4";

const SECURITY_HEADERS = Object.freeze({
  "Content-Security-Policy":
    "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none';",
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
  <meta name="theme-color" content="#eef1f4">
  <meta name="description" content="Rodolfo I. Bustamante - enterprise infrastructure and end-user support professional with ServiceNow operations, endpoint provisioning, network troubleshooting, controlled changes, AWS, Cloudflare, and automation for monitoring, deployment, and observability.">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <title>Rodolfo I. Bustamante | Infrastructure &amp; Network Operations</title>
  <link rel="canonical" href="https://resume.dot7eamworks.io/">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Rodolfo I. Bustamante | Infrastructure &amp; Network Operations">
  <meta property="og:description" content="Enterprise infrastructure and end-user support across ServiceNow, endpoint provisioning, network troubleshooting, controlled changes, AWS, Cloudflare, and automation for monitoring, deployment, and observability.">
  <meta property="og:url" content="https://resume.dot7eamworks.io/">
  <meta name="twitter:card" content="summary">
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rodolfo I. Bustamante",
      "alternateName": "Rudy Bustamante",
      "jobTitle": "Infrastructure and End-User Support Specialist",
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
      color-scheme: light;
      --canvas: #eef1f4;
      --paper: #ffffff;
      --ink: #242424;
      --muted: #5d6268;
      --blue: #245783;
      --blue-dark: #173f63;
      --rule: #9db9d2;
      --toolbar: #14283d;
      --toolbar-text: #f6f9fc;
      --toolbar-muted: #c7d4e0;
      --paper-shadow: 0 18px 48px rgba(21, 38, 55, 0.16);
      --sans: Arial, Helvetica, sans-serif;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: var(--canvas);
      color: var(--ink);
      font-family: var(--sans);
      font-size: 15px;
      line-height: 1.38;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; }
    a:focus-visible,
    button:focus-visible {
      outline: 3px solid #f4c95d;
      outline-offset: 3px;
    }

    .skip-link {
      position: fixed;
      left: 1rem;
      top: -5rem;
      z-index: 20;
      padding: 0.7rem 1rem;
      border-radius: 0.35rem;
      background: #fff;
      color: #10253a;
      font-weight: 700;
    }
    .skip-link:focus { top: 1rem; }

    .site-bar {
      position: sticky;
      top: 0;
      z-index: 10;
      border-bottom: 1px solid rgba(255, 255, 255, 0.13);
      background: rgba(20, 40, 61, 0.97);
      color: var(--toolbar-text);
      box-shadow: 0 6px 22px rgba(21, 38, 55, 0.14);
      backdrop-filter: blur(12px);
    }
    .site-bar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: min(8.5in, calc(100% - 1.5rem));
      min-height: 3.7rem;
      margin: 0 auto;
      gap: 1rem;
    }
    .site-brand {
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.075em;
      text-decoration: none;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .site-nav {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      margin-left: auto;
    }
    .site-nav a {
      color: var(--toolbar-muted);
      font-size: 0.8rem;
      font-weight: 700;
      text-decoration: none;
    }
    .site-nav a:hover { color: #fff; }
    .site-actions { display: flex; gap: 0.5rem; }
    .action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 2.25rem;
      padding: 0.5rem 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 0.35rem;
      background: transparent;
      color: #fff;
      font: 700 0.78rem/1 var(--sans);
      text-decoration: none;
      cursor: pointer;
    }
    .action.primary {
      border-color: #fff;
      background: #fff;
      color: #173f63;
    }
    .action:hover { transform: translateY(-1px); }

    .page-shell {
      width: 100%;
      padding: 2rem 0 3.5rem;
    }
    .resume-document {
      width: min(8.5in, calc(100% - 1.5rem));
      min-height: 11in;
      margin: 0 auto;
      padding: 0.55in 0.64in 0.45in;
      background: var(--paper);
      box-shadow: var(--paper-shadow);
    }

    .resume-header {
      margin-bottom: 0.2in;
      text-align: center;
    }
    .resume-header h1 {
      margin: 0 0 0.03in;
      color: var(--blue);
      font-size: 2.02rem;
      line-height: 1.05;
      letter-spacing: 0.035em;
      text-transform: uppercase;
    }
    .resume-title {
      margin: 0 0 0.03in;
      color: #2a2a2a;
      font-size: 0.98rem;
      font-weight: 800;
      letter-spacing: 0.015em;
      text-transform: uppercase;
    }
    .contact-line {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.18rem 0.4rem;
      margin: 0;
      padding: 0;
      color: var(--muted);
      font-size: 0.9rem;
      list-style: none;
    }
    .contact-line li + li::before {
      margin-right: 0.4rem;
      color: #90979e;
      content: "|";
    }
    .contact-line a { text-decoration: none; }
    .contact-line a:hover { text-decoration: underline; }

    .resume-section {
      margin-top: 0.14in;
      scroll-margin-top: 5rem;
    }
    .resume-section > h2 {
      margin: 0 0 0.06in;
      padding-bottom: 0.04in;
      border-bottom: 1px solid var(--rule);
      color: var(--blue);
      font-size: 0.98rem;
      line-height: 1.15;
      letter-spacing: 0.012em;
      text-transform: uppercase;
    }
    .resume-section p { margin: 0; }
    .resume-section p + p { margin-top: 0.04in; }

    .competencies {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.08in 0.2in;
    }
    .competencies strong { color: #202020; }

    .position + .position { margin-top: 0.11in; }
    .position-heading {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: baseline;
      gap: 0.2in;
      margin-bottom: 0.035in;
    }
    .position-heading p { margin: 0; }
    .position-title { font-weight: 800; }
    .organization { font-weight: 400; }
    .dates {
      color: var(--muted);
      font-style: italic;
      white-space: nowrap;
    }

    .resume-list {
      margin: 0;
      padding-left: 0.22in;
    }
    .resume-list li { padding-left: 0.015in; }
    .resume-list li + li { margin-top: 0.025in; }

    .project-list {
      display: grid;
      gap: 0.055in;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .project-list strong { color: var(--blue-dark); }
    .project-list span { color: var(--muted); }

    .education-line + .education-line { margin-top: 0.035in; }
    .education-line strong { color: var(--blue-dark); }

    .resume-footer {
      margin-top: 0.22in;
      padding-top: 0.08in;
      border-top: 1px solid #d9e0e6;
      color: var(--muted);
      font-size: 0.72rem;
      text-align: center;
    }

    @media (max-width: 760px) {
      body { font-size: 14px; }
      .site-bar { position: static; }
      .site-bar-inner {
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 0.65rem 0;
      }
      .site-nav { display: none; }
      .site-actions { margin-left: auto; }
      .page-shell { padding: 0; }
      .resume-document {
        width: 100%;
        min-height: 0;
        padding: 1.4rem 1.1rem 1.8rem;
        box-shadow: none;
      }
      .resume-header h1 {
        font-size: clamp(1.75rem, 8vw, 2.05rem);
        letter-spacing: 0.02em;
      }
      .resume-title { font-size: 0.84rem; }
      .contact-line { font-size: 0.82rem; }
      .competencies { grid-template-columns: 1fr; }
      .position-heading { grid-template-columns: 1fr; gap: 0.02in; }
      .dates { white-space: normal; }
    }

    @media (max-width: 430px) {
      .site-brand { width: 100%; }
      .site-actions {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
        width: 100%;
        margin-left: 0;
      }
      .action { width: 100%; }
      .contact-line {
        align-items: center;
        flex-direction: column;
      }
      .contact-line li + li::before { display: none; }
      .resume-section { margin-top: 0.18in; }
    }

    @media print {
      @page { size: letter; margin: 0.3in 0.4in; }
      body {
        background: #fff;
        color: #202020;
        font-size: 9pt;
        line-height: 1.15;
      }
      .site-bar,
      .skip-link { display: none !important; }
      .page-shell { padding: 0; }
      .resume-document {
        width: 100%;
        min-height: auto;
        margin: 0;
        padding: 0;
        box-shadow: none;
      }
      .resume-header { margin-bottom: 0.11in; }
      .resume-header h1 { font-size: 21pt; }
      .resume-title { font-size: 10.2pt; }
      .contact-line { font-size: 9.2pt; }
      .resume-section { margin-top: 0.05in; scroll-margin-top: 0; }
      .resume-section > h2 {
        margin-bottom: 0.035in;
        padding-bottom: 0.025in;
        font-size: 10.3pt;
      }
      .position + .position { margin-top: 0.04in; }
      .position-heading { margin-bottom: 0.02in; }
      .resume-list li + li { margin-top: 0.01in; }
      .project-list { gap: 0.025in; }
      #military { break-before: page; }
      #military .position,
      #volunteer { break-inside: avoid; }
      .resume-footer { margin-top: 0.11in; }
      h1,
      h2,
      h3,
      .position-heading { break-after: avoid; }
      li,
      .education-line { break-inside: avoid; }
      a { text-decoration: none; }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to résumé</a>

  <header class="site-bar" aria-label="Résumé controls">
    <div class="site-bar-inner">
      <a class="site-brand" href="#main">Rodolfo I. Bustamante</a>
      <nav class="site-nav" aria-label="Résumé sections">
        <a href="#summary">Summary</a>
        <a href="#experience">Experience</a>
        <a href="#volunteer">Volunteer</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>
      <div class="site-actions">
        <a class="action" href="mailto:rudybustamante01@icloud.com">Email</a>
        <button class="action primary" id="print-resume" type="button">Download / Print PDF</button>
      </div>
    </div>
  </header>

  <main class="page-shell" id="main">
    <article class="resume-document" aria-label="Rodolfo I. Bustamante professional résumé">
      <header class="resume-header">
        <h1>Rodolfo I. Bustamante</h1>
        <p class="resume-title">Information Technology | Infrastructure &amp; End-User Support</p>
        <ul class="contact-line" aria-label="Contact information">
          <li>Southern Arizona</li>
          <li><a href="tel:+15208413456">520-841-3456</a></li>
          <li><a href="mailto:rudybustamante01@icloud.com">rudybustamante01@icloud.com</a></li>
          <li><a href="https://github.com/N7Septimo" rel="noreferrer">github.com/N7Septimo</a></li>
        </ul>
      </header>

      <section class="resume-section" id="summary">
        <h2>Professional Summary</h2>
        <p>USMC and Army National Guard veteran with four years of experience delivering infrastructure and end-user support across Amazon's four-site, 1.4M+ sq. ft. Tucson node. Developed practical technical documentation, standard operating procedures, and automation to streamline on-site maintenance and end-user support.</p>
      </section>

      <section class="resume-section" aria-labelledby="competencies-heading">
        <h2 id="competencies-heading">Core Competencies</h2>
        <div class="competencies">
          <p><strong>IT Service &amp; User Support:</strong> ServiceNow incident and request management, SLA tracking, escalation coordination, QA/QC, end-user device and software deployment, Microsoft 365 administration, and end-user training.</p>
          <p><strong>Network &amp; Infrastructure Support:</strong> Hands-on Cisco switching and wireless troubleshooting, DNS/DHCP, TCP/IP, VoIP, MDF/IDF support, Cat6 and fiber cabling, network mapping, VLAN segmentation, and network monitoring.</p>
          <p><strong>Project &amp; Technical Leadership:</strong> Controlled change management (MCM), large-scale infrastructure and workflow projects, technical meeting leadership, cross-functional coordination, stakeholder communication, and documentation.</p>
          <p><strong>Cloud, Automation &amp; Observability:</strong> AWS EC2, Lambda, and S3; Cloudflare Zero Trust, Tunnels, and Workers; Envoy and Prometheus; Python, Go, JavaScript, and Bash; infrastructure as code and automation for monitoring, deployment, and observability.</p>
        </div>
      </section>

      <section class="resume-section" id="experience">
        <h2>Professional Experience</h2>
        <article class="position">
          <div class="position-heading">
            <p><span class="position-title">IT Support Associate II</span> <span class="organization">| Amazon Operations Technology Support (OTS) | Tucson, AZ</span></p>
            <p class="dates">Jan 2021 - Aug 2025</p>
          </div>
          <ul class="resume-list">
            <li>Delivered infrastructure and end-user support in a 24/7 Amazon Robotics/Kiva environment, developing practical technical solutions for recurring operational issues while minimizing downtime and ensuring continuous site operations.</li>
            <li>Executed two formally controlled infrastructure changes (MCMs) per week as a standard operating expectation, carrying each change from planning and approval through implementation and post-change verification, and documenting outcomes and rollback procedures.</li>
            <li>Managed a high-volume ServiceNow incident and request queue through prioritization, diagnosis, escalation, restoration, and closure while meeting individual SLA requirements.</li>
            <li>Provisioned, configured, and supported Windows, macOS, and Linux endpoints, thin clients, barcode scanners, workstations, and related equipment; performed hands-on Cisco, Active Directory, imaging, and endpoint hardening tasks.</li>
            <li>Led large-scale infrastructure and workflow projects and chaired technical meetings, coordinating Operations leaders, global teams, engineers, and vendors through execution, QA/QC, and post-deployment reviews to ensure operational readiness.</li>
            <li>Mentored new OTS team members on SOPs, escalation paths, and disciplined troubleshooting, and traveled to new site builds to provide comprehensive on-site IT support.</li>
            <li><strong>Additional OTS initiatives:</strong> Designed and deployed a Mobile Hard of Hearing standup area and developed automated node health-check prototypes to improve operational visibility, reduce incident response time, and increase site resiliency.</li>
          </ul>
        </article>
      </section>

      <section class="resume-section" aria-labelledby="military-heading">
        <h2 id="military-heading">Military Experience</h2>
        <article class="position">
          <div class="position-heading">
            <p><span class="position-title">Staff Sergeant - 15Y Armament/Electrical/Avionics Systems Repairer; 11B Infantryman</span> <span class="organization">| Arizona Army National Guard | AZ</span></p>
            <p class="dates">2006 - 2019</p>
          </div>
          <ul class="resume-list">
            <li>Diagnosed, repaired, and maintained AH-64D armament, electrical, fire-control, and avionics systems using technical publications and controlled maintenance procedures.</li>
            <li>Applied electrical theory and systematic fault isolation to complex integrated systems while maintaining equipment accountability and mission readiness.</li>
            <li>Completed active service supporting Operation Iraqi Freedom; awarded the Bronze Star Medal for meritorious service.</li>
          </ul>
        </article>

        <article class="position">
          <div class="position-heading">
            <p><span class="position-title">Sergeant (E-5) - 0331 Machine Gunner</span> <span class="organization">| 3rd Battalion, 1st Marines ("Thundering Third"), Weapons Company, Combined Anti-Armor Team (CAAT) Platoon</span></p>
            <p class="dates">1995 - 2003</p>
          </div>
          <ul class="resume-list">
            <li>Led Marines as a Sergeant (E-5) within a Weapons Company Combined Anti-Armor Team (CAAT) Platoon, enforcing standards and maintaining accountability for personnel, crew-served weapons and equipment.</li>
            <li>Directed the employment of machine-gun teams and supervised readiness activities to keep Marines and assigned weapon systems prepared for mission requirements.</li>
            <li>Instructed Marines on the M16A2, 9mm pistol, and M203 during day and nighttime events, delivering structured weapons-qualification training to over 6,800 personnel.</li>
          </ul>
        </article>
      </section>

      <section class="resume-section" id="projects">
        <h2>Independent Technical Projects</h2>
        <ul class="project-list">
          <li><strong>AI-Assisted Envoy Control Plane:</strong> Built an AWS-hosted Envoy ADS/xDS lab with Prometheus telemetry, a Cloudflare Worker bridge, guarded health analysis, and rollback automation for safe deployments.</li>
          <li><strong>Managed Mobile Network:</strong> Designed an iOS proxy environment with hosted policy delivery, automated rule updates, Hysteria2 transport, and cellular-to-Wi-Fi handoff diagnostics.</li>
        </ul>
      </section>

      <section class="resume-section" id="volunteer">
        <h2>Volunteer &amp; Community Service</h2>
        <article class="position">
          <div class="position-heading">
            <p><span class="position-title">Disaster Response Volunteer</span> <span class="organization">| Team Rubicon</span></p>
            <p class="dates">Active | Deployment Scheduled Aug 2026</p>
          </div>
          <ul class="resume-list">
            <li>Active member of Team Rubicon's veteran-led disaster-response network, preparing for an August 2026 deployment supporting disaster relief, humanitarian aid, and community recovery operations.</li>
          </ul>
        </article>
      </section>

      <section class="resume-section" id="education">
        <h2>Education &amp; Recognition</h2>
        <p class="education-line"><strong>Bachelor of Science in Information Technology</strong>, Concentration in Network Architecture and Security | American Military University | 2014</p>
        <p class="education-line"><strong>Bronze Star Medal</strong> | Operation Iraqi Freedom | Honorable military service</p>
      </section>

      <footer class="resume-footer">Rodolfo I. Bustamante | Résumé | Release ${RELEASE}</footer>
    </article>
  </main>

  <script>
    document.getElementById("print-resume").addEventListener("click", () => window.print());
  </script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    return new Response(HTML, {
      status: 200,
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        ...SECURITY_HEADERS,
      },
    });
  },
};
