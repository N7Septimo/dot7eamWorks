const CANONICAL_ORIGIN = "https://resume.dot7eamworks.io";
const RELEASE = "2026.10.06.04";

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
  <meta name="description" content="Résumé of Rodolfo I. Bustamante: IT support, aircraft avionics maintenance, military service, community volunteering, education, and awards.">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <title>Rodolfo I. Bustamante | Résumé</title>
  <link rel="canonical" href="https://resume.dot7eamworks.io/">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Rodolfo I. Bustamante | Résumé">
  <meta property="og:description" content="Résumé of IT support, aircraft avionics maintenance, military service, community volunteering, education, and awards.">
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
      "email": "mailto:US_MARINES911@hotmail.com",
      "telephone": "+1-520-841-3456",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1422 Calle Tordo",
        "addressLocality": "Rio Rico",
        "addressRegion": "Arizona",
        "addressCountry": "US"
      },
      "award": "Bronze Star Medal",
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
<header class="site-bar" aria-label="Résumé controls"><div class="site-bar-inner"><a class="site-brand" href="#main">Rodolfo I. Bustamante</a><nav class="site-nav" aria-label="Résumé sections"><a href="#summary">Summary</a><a href="#experience">Experience</a><a href="#community">Community</a><a href="#education">Education</a><a href="#awards">Honors &amp; Awards</a></nav><div class="site-actions"><a class="action" href="mailto:rudybustamante01@icloud.com">Email</a><button class="action primary" id="print-resume" type="button">Download / Print PDF</button></div></div></header>
<main class="page-shell" id="main"><article class="resume-document" aria-label="Rodolfo I. Bustamante résumé">
<header class="resume-header"><h1>Rodolfo I. Bustamante</h1><ul class="contact-line" aria-label="Contact information"><li>Greater Tucson and Phoenix Area</li><li>1422 Calle Tordo, Rio Rico, Arizona</li><li><a href="mailto:US_MARINES911@hotmail.com">US_MARINES911@hotmail.com</a></li><li><a href="tel:+15208413456">(520) 841-3456</a></li></ul></header>
<section class="resume-section" id="summary"><h2>Summary</h2><p>IT infrastructure professional with 4+ years supporting large enterprise environments, focused on operational continuity, network reliability, and technical problem-solving. Combines hands-on infrastructure experience with modern cloud, networking, and observability practices, backed by formal IT education and military leadership experience.</p></section>
<section class="resume-section" id="experience"><h2>Professional Experience</h2><article class="position"><div class="position-heading"><p><span class="position-title">IT Support Associate II</span> <span class="organization">| Amazon Operations Technology Support (OTS) | Tucson, AZ</span></p><p class="dates">Jan 2021 – Aug 2025</p></div><ul class="resume-list">
            <li>Provided primary on-site IT support for TUS2 and neighboring Amazon facilities, triaging and prioritizing cross-site incidents based on severity and operational impact.</li>
            <li>Conducted weekly virtual training and mentoring for newly hired OTS personnel nationwide, covering role responsibilities, internal IT tools, equipment, resources, and organizational policies.</li>
            <li>Reintroduced the Demarcation Power Remediation Project to improve network redundancy and replace aging infrastructure, subsequently adopted into Amazon’s project portfolio for legacy facilities.</li>
            <li>Traveled to new Amazon site builds to support IT infrastructure deployment, installation, validation, troubleshooting, and operational readiness during facility launches and transition to operations.</li></ul></article>
<article class="position"><div class="position-heading"><p><span class="position-title">Armament Aircraft Maintenance Technician – 15Y30, AH-64D Attack Helicopter</span> <span class="organization">| Arizona Air National Guard (AZANG), 1/285 Aviation Battalion | Red Rock, AZ</span></p><p class="dates">Nov 2006 – Nov 2019</p></div><ul class="resume-list">
<li>Executed maintenance orders and directed a team of technicians in repairing AH-64D weapon systems.</li>
<li>Carried out scheduled and unscheduled work on electronic equipment, including AH-64D avionics.</li>
<li>Instructed new technicians in electronic troubleshooting with ULLS-A(E), pairing technical guidance with hands-on practice.</li>
<li>Kept technical currency and followed OSHA requirements, documenting hangar safety practices that supported successful inspections and safe operations.</li>
</ul></article>
<article class="position"><div class="position-heading"><p><span class="position-title">Crew Chief – 15T3F UH-60 Helicopter / UAV SUAS Operator</span> <span class="organization">| Arizona Army National Guard, Western Aviation Training Site | Red Rock, AZ</span></p><p class="dates">Jan 2014 – Jan 2017</p></div><ul class="resume-list">
<li>Contributed to UH-60 crew projects by handling requisitions, completing repairs, diagnosing faults, and teaching short technical courses.</li>
<li>Kept operator currency and progression qualifications for the Unmanned Aircraft Aircrew Training Program, meeting required flight-hour standards.</li>
<li>Tracked and serviced Small Unmanned Aircraft System (SUAS) equipment, keeping inventory within budget and helping prevent the state program from becoming obsolete.</li>
</ul></article>
<article class="position"><div class="position-heading"><p><span class="position-title">U.S. Soldier – Enlisted</span> <span class="organization">| United States Army | Overseas Duty</span></p><p class="dates">May 2008 – Jan 2010</p></div><ul class="resume-list">
<li>Established and applied standard operating procedures for combat vehicle loads and convoy tactics; these standards resulted in 100% mission success.</li>
<li>Advised leaders on adapting to changing combat conditions, providing route-specific guidance for routes linking each forward operating base (FOB) and supporting mission effectiveness.</li>
<li>Stayed in country to train and lead units along new routes, filling operational roles as needed during combat missions.</li>
</ul></article>
<article class="position"><div class="position-heading"><p><span class="position-title">U.S. Marine – Enlisted</span> <span class="organization">| United States Marine Corps | Camp Pendleton, CA</span></p><p class="dates">Oct 1995 – Oct 2003</p></div><ul class="resume-list">
<li>Served as a designated marksman and machine gunner in an amphibious assault unit, supporting security, light-vehicle reconnaissance, and raid-training operations.</li>
<li>Prepared classes and helped train foreign military and security forces in counterinsurgency, population engagement, and counterterrorism.</li>
<li>Coached Marines in rifle and pistol marksmanship for qualifications and matches, teaching sight adjustment, data logging, and firing positions for day and night courses.</li>
</ul></article></section>
<section class="resume-section" id="community"><h2>Community Services</h2><article class="position"><div class="position-heading"><p><span class="position-title">Volunteer – Disaster Humanitarian Aid</span> <span class="organization">| Team Rubicon | Tucson, AZ</span></p><p class="dates">Jan 2020 – Present</p></div><ul class="resume-list">
<li>Team Rubicon mobilizes veterans to help communities prepare for, respond to, and recover from disasters and humanitarian crises.</li>
<li>Remain active with the organization and ready to assist communities through its disaster-response work.</li>
</ul></article></section>
<section class="resume-section" id="education"><h2>Education</h2><ul class="education-list">
<li>American Military University – Bachelor of Science in Information Technology (2014 graduate), Charles Town, West Virginia.</li>
<li>American Military University – Current student in M.S. Information Technology Project Management; Certificates in Network Security. Charles Town, West Virginia.</li>
</ul></section>
<section class="resume-section" id="awards"><h2>Honors &amp; Awards</h2><ul class="education-list">
<li>Bronze Star Medal – United States Armed Forces award.</li>
<li>Recognized for exceptionally meritorious service and contributions to duty during wartime combat operations.</li>
</ul></section>
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