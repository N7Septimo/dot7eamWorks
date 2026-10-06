const CANONICAL_ORIGIN = "https://resume.dot7eamworks.io";
const RELEASE = "2026.10.06.01";

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
  <meta name="description" content="Rodolfo I. Bustamante - infrastructure operations professional with Amazon OTS experience across Cisco switching, MDF/IDF work, Layer 1/2 troubleshooting, operational technology, AWS, Envoy, Prometheus, and network automation.">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <title>Rodolfo I. Bustamante | Infrastructure Operations</title>
  <link rel="canonical" href="https://resume.dot7eamworks.io/">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Rodolfo I. Bustamante | Infrastructure Operations">
  <meta property="og:description" content="Amazon infrastructure operations, Layer 1/2 networking, operational technology, cloud-hosted control planes, observability, and automation.">
  <meta property="og:url" content="https://resume.dot7eamworks.io/">
  <meta name="twitter:card" content="summary">
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rodolfo I. Bustamante",
      "alternateName": "Rudy Bustamante",
      "jobTitle": "Infrastructure Operations",
      "url": "https://resume.dot7eamworks.io/",
      "email": "mailto:rudybustamante01@icloud.com",
      "telephone": "+1-520-841-3456",
      "address": {
        "@type": "PostalAddress",
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
    :root { color-scheme: light; --canvas: #eef1f4; --paper: #ffffff; --ink: #242424; --muted: #5d6268; --blue: #245783; --blue-dark: #173f63; --rule: #9db9d2; --toolbar: #14283d; --toolbar-text: #f6f9fc; --toolbar-muted: #c7d4e0; --paper-shadow: 0 18px 48px rgba(21, 38, 55, 0.16); --sans: Arial, Helvetica, sans-serif; }
    * { box-sizing: border-box; } html { scroll-behavior: smooth; } body { margin: 0; background: var(--canvas); color: var(--ink); font-family: var(--sans); font-size: 15px; line-height: 1.38; -webkit-font-smoothing: antialiased; }
    a { color: inherit; } a:focus-visible, button:focus-visible { outline: 3px solid #f4c95d; outline-offset: 3px; }
    .skip-link { position: fixed; left: 1rem; top: -5rem; z-index: 20; padding: 0.7rem 1rem; border-radius: 0.35rem; background: #fff; color: #10253a; font-weight: 700; } .skip-link:focus { top: 1rem; }
    .site-bar { position: sticky; top: 0; z-index: 10; border-bottom: 1px solid rgba(255,255,255,.13); background: rgba(20,40,61,.97); color: var(--toolbar-text); box-shadow: 0 6px 22px rgba(21,38,55,.14); backdrop-filter: blur(12px); }
    .site-bar-inner { display:flex; align-items:center; justify-content:space-between; width:min(8.5in,calc(100% - 1.5rem)); min-height:3.7rem; margin:0 auto; gap:1rem; }
    .site-brand { font-size:.8rem; font-weight:800; letter-spacing:.075em; text-decoration:none; text-transform:uppercase; white-space:nowrap; }
    .site-nav { display:flex; align-items:center; gap:.9rem; margin-left:auto; } .site-nav a { color:var(--toolbar-muted); font-size:.8rem; font-weight:700; text-decoration:none; } .site-nav a:hover { color:#fff; }
    .site-actions { display:flex; gap:.5rem; } .action { display:inline-flex; align-items:center; justify-content:center; min-height:2.25rem; padding:.5rem .75rem; border:1px solid rgba(255,255,255,.25); border-radius:.35rem; background:transparent; color:#fff; font:700 .78rem/1 var(--sans); text-decoration:none; cursor:pointer; } .action.primary { border-color:#fff; background:#fff; color:#173f63; } .action:hover { transform:translateY(-1px); }
    .page-shell { width:100%; padding:2rem 0 3.5rem; } .resume-document { width:min(8.5in,calc(100% - 1.5rem)); min-height:11in; margin:0 auto; padding:.55in .64in .45in; background:var(--paper); box-shadow:var(--paper-shadow); }
    .resume-header { margin-bottom:.2in; text-align:center; } .resume-header h1 { margin:0 0 .03in; color:var(--blue); font-size:2.02rem; line-height:1.05; letter-spacing:.035em; text-transform:uppercase; } .resume-title { margin:0 0 .03in; color:#2a2a2a; font-size:.98rem; font-weight:800; letter-spacing:.015em; text-transform:uppercase; }
    .contact-line { display:flex; flex-wrap:wrap; justify-content:center; gap:.18rem .4rem; margin:0; padding:0; color:var(--muted); font-size:.9rem; list-style:none; } .contact-line li + li::before { margin-right:.4rem; color:#90979e; content:"|"; } .contact-line a { text-decoration:none; } .contact-line a:hover { text-decoration:underline; }
    .resume-section { margin-top:.14in; scroll-margin-top:5rem; } .resume-section > h2 { margin:0 0 .06in; padding-bottom:.04in; border-bottom:1px solid var(--rule); color:var(--blue); font-size:.98rem; line-height:1.15; letter-spacing:.012em; text-transform:uppercase; } .resume-section p { margin:0; }
    .skills { display:grid; gap:.035in; } .skills strong { color:#202020; } .position + .position { margin-top:.11in; } .position-heading { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:baseline; gap:.2in; margin-bottom:.035in; } .position-heading p { margin:0; } .position-title { font-weight:800; } .organization { font-weight:400; } .dates { color:var(--muted); font-style:italic; white-space:nowrap; }
    .resume-list { margin:0; padding-left:.22in; } .resume-list li { padding-left:.015in; } .resume-list li + li { margin-top:.025in; } .education-list { margin:0; padding-left:.22in; } .education-list li + li { margin-top:.025in; } .resume-footer { margin-top:.22in; padding-top:.08in; border-top:1px solid #d9e0e6; color:var(--muted); font-size:.72rem; text-align:center; }
    @media (max-width:760px) { body {font-size:14px;} .site-bar{position:static;} .site-bar-inner{align-items:flex-start;flex-wrap:wrap;padding:.65rem 0;} .site-nav{display:none;} .site-actions{margin-left:auto;} .page-shell{padding:0;} .resume-document{width:100%;min-height:0;padding:1.4rem 1.1rem 1.8rem;box-shadow:none;} .resume-header h1{font-size:clamp(1.75rem,8vw,2.05rem);letter-spacing:.02em;} .resume-title{font-size:.84rem;} .contact-line{font-size:.82rem;} .position-heading{grid-template-columns:1fr;gap:.02in;} .dates{white-space:normal;} }
    @media (max-width:430px) { .site-brand{width:100%;} .site-actions{display:grid;grid-template-columns:.8fr 1.2fr;width:100%;margin-left:0;} .action{width:100%;} .contact-line{align-items:center;flex-direction:column;} .contact-line li + li::before{display:none;} .resume-section{margin-top:.18in;} }
    @media print { @page {size:letter;margin:.42in .54in;} body{background:#fff;color:#202020;font-size:9.25pt;line-height:1.22;} .site-bar,.skip-link{display:none!important;} .page-shell{padding:0;} .resume-document{width:100%;min-height:auto;margin:0;padding:0;box-shadow:none;} .resume-header{margin-bottom:.1in;} .resume-header h1{font-size:21pt;} .resume-title{font-size:10.2pt;} .contact-line{font-size:9pt;} .resume-section{margin-top:.075in;scroll-margin-top:0;} .resume-section > h2{margin-bottom:.03in;padding-bottom:.02in;font-size:10.1pt;} .position + .position{margin-top:.06in;} .position-heading{margin-bottom:.018in;} .resume-list li + li,.education-list li + li{margin-top:.01in;} .resume-footer{margin-top:.09in;} h1,h2,.position-heading{break-after:avoid;} li{break-inside:avoid;} a{text-decoration:none;} }
  </style>
</head>
<body>
<a class="skip-link" href="#main">Skip to résumé</a>
<header class="site-bar" aria-label="Résumé controls"><div class="site-bar-inner"><a class="site-brand" href="#main">Rodolfo I. Bustamante</a><nav class="site-nav" aria-label="Résumé sections"><a href="#summary">Summary</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#military">Military</a><a href="#education">Education</a></nav><div class="site-actions"><a class="action" href="mailto:rudybustamante01@icloud.com">Email</a><button class="action primary" id="print-resume" type="button">Download / Print PDF</button></div></div></header>
<main class="page-shell" id="main"><article class="resume-document" aria-label="Rodolfo I. Bustamante professional résumé">
<header class="resume-header"><h1>Rodolfo I. Bustamante</h1><p class="resume-title">Infrastructure Operations</p><ul class="contact-line" aria-label="Contact information"><li>Southern Arizona</li><li><a href="tel:+15208413456">520-841-3456</a></li><li><a href="mailto:rudybustamante01@icloud.com">rudybustamante01@icloud.com</a></li><li><a href="https://github.com/N7Septimo" rel="noreferrer">github.com/N7Septimo</a></li></ul></header>
<section class="resume-section" id="summary"><h2>Summary</h2><p>IT infrastructure and operations specialist with 4+ years in Amazon OTS, responsible for production support, network troubleshooting, site infrastructure, and technical training. Leads with evidence-based fault isolation—from physical links and Cisco switching through IP services and applications—and brings aviation maintenance, combat leadership, and independently engineered AWS/Cloudflare network systems. Known for translating complex technical work into documented procedures, coordinated changes, and instruction that helps teams execute reliably.</p></section>
<section class="resume-section" id="skills"><h2>Technical Skills</h2><div class="skills"><p><strong>Systems &amp; Access:</strong> Windows, Linux, macOS, Active Directory, account permissions, Group Policy.</p><p><strong>Networking &amp; Infrastructure:</strong> Cisco switching and wireless, TCP/IP, DNS/DHCP, VLANs, LAN/WAN, MDF/IDF and demarcation infrastructure, Cat6/fiber patching, Fluke cable tracing.</p><p><strong>Operations &amp; Project Coordination:</strong> ServiceNow incident management, hardware lifecycle, infrastructure deployment, equipment requirements, Managed Change Management (MCM), vendor coordination, technical documentation, and team training.</p><p><strong>Independent Cloud Project:</strong> AWS EC2, Cloudflare, Hysteria2, Envoy, Prometheus, GitHub configuration management, centralized routing and policy enforcement, Claude integration.</p></div></section>
<section class="resume-section" id="projects"><h2>Projects</h2><article class="position"><div class="position-heading"><p><span class="position-title">Independent Cloud &amp; Network Project</span></p><p class="dates">Aug 2025 – Present</p></div><ul class="resume-list"><li>Built a self-hosted AWS EC2 network integrating Hysteria2 transport, Envoy proxying, Cloudflare ingress, and Prometheus telemetry. Configured Linux services, TLS, and routing across the client and gateway path.</li><li>Validated TCP forwarding through Envoy and developed deterministic admission logic to route through Envoy or reject traffic. Managed configuration in GitHub and used Prometheus and CI to review service behavior and verify changes.</li></ul></article></section>
<section class="resume-section" id="experience"><h2>Experience</h2><article class="position"><div class="position-heading"><p><span class="position-title">IT Support Associate II</span> <span class="organization">| Amazon Operations Technology Support (OTS) | Tucson, AZ</span></p><p class="dates">Jan 2021 – Aug 2025</p></div><ul class="resume-list">
<li>Supported TUS2 during night-shift production and covered neighboring Amazon facilities. Prioritized ServiceNow incidents by severity and operational impact while handling endpoint and infrastructure resolution, hardware lifecycle, new-site deployments, and vendor remediation.</li>
<li>Traced unlabeled IDF cable paths with Fluke tone-and-trace tools and checked connection status. Identified the serving IDF, switch, stack, and port, then recorded cable type and link speed or capability.</li>
<li>Checked VLAN membership, IP addressing and TCP/IP reachability, DNS/DHCP, and directory access; reviewed application logs to pinpoint faults at the correct layer.</li>
<li>Delivered weekly virtual classes and mentored newly hired OTS technicians nationwide on role responsibilities, internal tools, IT equipment, policies, and support procedures.</li>
<li>Rerouted power and data for AFE1/AFE2, coordinating work across 200+ operational connections to align infrastructure changes with site sequencing.</li>
<li>Reprogrammed 150 facility keypads as part of a facility-wide access-control project.</li>
<li>Advanced a local Demarcation Power Remediation initiative into the regionally tracked pipeline with a local engineer, bringing the site requirement into formal project review.</li>\n<li>Specified UPS requirements, created setup documentation where no internal reference existed, and prepared MCM submissions and vendor work for a planned lead-acid-to-lithium-ion transition. The team assumed execution after my departure.</li>
</ul></article></section>
<section class="resume-section" id="military"><h2>Military</h2><article class="position"><div class="position-heading"><p><span class="position-title">Staff Sergeant (E-6) – 15Y Avionics Repairer / 11B Infantryman</span> <span class="organization">| Arizona Army National Guard</span></p><p class="dates">2006 – 2019</p></div><ul class="resume-list"><li>Led scheduled and unscheduled maintenance on AH-64D Apache avionics, fire-control, and armament systems. Used technical publications, electrical troubleshooting, and fault isolation to diagnose discrepancies and complete repairs.</li><li>Trained incoming technicians in electronic troubleshooting and ULLS-A(E) procedures through classroom instruction and hands-on practice. Maintained hangar safety records and applied OSHA requirements for inspections.</li><li>Completed 18 months boots-on-ground in Iraq conducting convoy security, escort, route-clearance, and personnel-security operations. Developed vehicle-load and convoy procedures, briefed leaders on routes, and trained incoming units.</li></ul></article><article class="position"><div class="position-heading"><p><span class="position-title">UH-60 Crew Chief / Small Unmanned Aircraft System Operator</span> <span class="organization">| Western Army National Guard Aviation Training Site</span></p><p class="dates">Jan 2014 – Jan 2017</p></div><ul class="resume-list"><li>Handled UH-60 maintenance, troubleshooting, and parts requisitions while teaching short technical courses to fellow crew members.</li><li>Maintained SUAS inventories, operator flight currency, and progression qualifications. Kept equipment accountable and the program within budget, helping sustain the state training program.</li></ul></article><article class="position"><div class="position-heading"><p><span class="position-title">Sergeant (E-5) – 0331 Machine Gunner, CAAT Platoon</span> <span class="organization">| U.S. Marine Corps – 3rd Battalion, 1st Marines</span></p><p class="dates">1995 – 2003</p></div><ul class="resume-list"><li>Led a Marine Combined Anti-Armor Team section during WESTPAC deployments. Assigned small-unit responsibilities and maintained vehicle and communications readiness for security, reconnaissance, and raid-training operations.</li><li>Instructed more than 6,800 personnel in rifle and pistol marksmanship during a nine-month Camp Margarita assignment, covering sight adjustment, data recording, firing positions, weapons safety, and day/night qualifications.</li></ul></article></section>
<section class="resume-section" id="education"><h2>Education, Awards &amp; Service</h2><ul class="education-list"><li>Bachelor of Science in Information Technology (Network Architecture) – American Military University</li><li>Master of Science coursework in Information Technology Project Management – American Military University (in progress)</li><li>Bronze Star Medal – Operation Iraqi Freedom</li><li>Team Rubicon – Active Volunteer / Disaster Response; maintained readiness to assist communities during disasters and humanitarian crises.</li></ul></section>
<footer class="resume-footer">Rodolfo I. Bustamante | Résumé | Release ${RELEASE}</footer></article></main>
<script>document.getElementById("print-resume").addEventListener("click", () => window.print());</script>
</body></html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url); const method = request.method.toUpperCase();
    if (url.hostname.endsWith(".workers.dev")) { const canonical = new URL(CANONICAL_ORIGIN); canonical.pathname = url.pathname; canonical.search = url.search; return Response.redirect(canonical.toString(), 308); }
    if (method !== "GET" && method !== "HEAD") return new Response("Method Not Allowed\n", {status:405,headers:{"Allow":"GET, HEAD","Content-Type":"text/plain;charset=UTF-8",...SECURITY_HEADERS}});
    if (url.pathname === "/healthz") { const body=JSON.stringify({status:"ok",service:"resume",release:RELEASE}); return new Response(method === "HEAD" ? null : body,{status:200,headers:{"Content-Type":"application/json;charset=UTF-8","Cache-Control":"no-store",...SECURITY_HEADERS}}); }
    if (url.pathname === "/robots.txt") { const body=`User-agent: *\n`+`Allow: /\n`+`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml\n`; return new Response(method === "HEAD" ? null : body,{status:200,headers:{"Content-Type":"text/plain;charset=UTF-8",...SECURITY_HEADERS}}); }
    if (url.pathname === "/sitemap.xml") { const body=`<?xml version="1.0" encoding="UTF-8"?>\n`+`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`+`  <url><loc>${CANONICAL_ORIGIN}/</loc></url>\n`+`</urlset>\n`; return new Response(method === "HEAD" ? null : body,{status:200,headers:{"Content-Type":"application/xml;charset=UTF-8",...SECURITY_HEADERS}}); }
    if (url.pathname !== "/") return new Response(method === "HEAD" ? null : "Not Found\n",{status:404,headers:{"Content-Type":"text/plain;charset=UTF-8",...SECURITY_HEADERS}});
    return new Response(method === "HEAD" ? null : HTML,{status:200,headers:{"Content-Type":"text/html;charset=UTF-8",...SECURITY_HEADERS}});
  },
};