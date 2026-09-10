// The screen experience enhances the same content used by the printable resume.
export const SHOWCASE_STYLES = `
    .screen-only { display: none; }
    @media print {
      .resume-document { display: flex; flex-direction: column; }
      .intro-grid { order: 0; }
      #summary { order: 1; }
      #skills { order: 2; }
      #experience { order: 3; }
      #military { order: 4; }
      #projects { order: 5; }
      #volunteer { order: 6; }
      #education { order: 7; }
      .resume-footer { order: 8; }
    }
    @media screen {
      :root {
        --canvas: #edf2f7;
        --ink: #152a40;
        --muted: #52677b;
        --blue: #175bc5;
        --blue-dark: #163b6c;
        --rule: #cad7e5;
        --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --mono: ui-monospace, SFMono-Regular, Consolas, monospace;
      }
      body { font-size: 1rem; line-height: 1.65; }
      .screen-only { display: block; }
      .print-only { display: none; }
      .site-bar { position: sticky; background: rgba(15, 34, 55, .97); }
      .site-bar-inner { width: min(1264px, calc(100% - 3rem)); min-height: 4.8rem; flex-wrap: wrap; gap: .75rem 1.5rem; padding: .9rem 0; }
      .site-brand { font-size: .875rem; letter-spacing: .02em; text-transform: none; }
      .site-nav { display: flex; flex-wrap: wrap; gap: .4rem 1rem; order: 3; width: 100%; margin: 0; }
      .site-nav a { font-size: .875rem; padding: .2rem 0; border-bottom: 2px solid transparent; }
      .site-nav a[aria-current="location"] { color: #fff; border-bottom-color: #78c9ff; }
      .site-actions { margin-left: auto; }
      .action { min-height: 2.75rem; font-size: .875rem; border-radius: .5rem; }
      .action.primary { background: #deeeff; border-color: #deeeff; color: #11385f; }
      .reading-progress { position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: #78c9ff; transform: scaleX(0); transform-origin: left; }
      .page-shell { padding: 4.5rem 0 2rem; }
      .resume-document { width: min(1200px, calc(100% - 3rem)); padding: 0; min-height: 0; background: transparent; box-shadow: none; }
      .intro-grid { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); gap: clamp(2rem, 5vw, 5rem); align-items: center; padding-bottom: 3.5rem; }
      .resume-header { text-align: left; margin: 0; }
      .eyebrow { margin: 0 0 1.4rem; color: var(--blue-dark); font: 600 .875rem/1.5 var(--mono); letter-spacing: .04em; }
      .resume-header h1 { font-size: clamp(2.8rem, 6vw, 5.3rem); line-height: 1.05; font-weight: 750; letter-spacing: -.045em; text-transform: none; color: var(--ink); margin: 0 0 1.4rem; overflow-wrap: anywhere; }
      .resume-header h1 span { display: block; }
      .resume-title { max-width: 38ch; margin: 0 0 1.6rem; font-size: 1.15rem; line-height: 1.55; letter-spacing: 0; text-transform: none; font-weight: 500; color: var(--muted); }
      .contact-line { justify-content: flex-start; gap: .4rem 1rem; font-size: .875rem; line-height: 1.5; }
      .contact-line li + li::before { display: none; }
      .contact-line a { text-decoration: underline; text-decoration-color: #aabccc; text-underline-offset: .2em; overflow-wrap: anywhere; }
      .hero-actions { display: flex; flex-wrap: wrap; gap: .7rem; margin-top: 1.8rem; }
      .button { display: inline-flex; align-items: center; justify-content: center; min-height: 2.9rem; padding: .65rem 1.1rem; border: 1px solid #bccfe2; border-radius: .5rem; background: #fff; color: var(--blue-dark); font: 650 .9375rem/1.4 var(--sans); text-decoration: none; cursor: pointer; }
      .button.primary { color: #fff; background: var(--blue); border-color: var(--blue); box-shadow: 0 5px 12px #175bc51a; }
      .button:hover { border-color: var(--blue); }
      .button.primary:hover { background: #144aa0; }
      button:disabled { cursor: default; }
      .button:disabled { opacity: .6; }
      .system-card { min-width: 0; background: #10263e; border: 1px solid #36506b; border-radius: 1rem; padding: 1.6rem; color: #f5f9ff; box-shadow: 12px 12px 0 #d1deeb, 0 24px 42px #1836501f; }
      .system-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 1.75rem; }
      .system-heading p { margin: 0; font: 500 .875rem/1.5 var(--mono); color: #a9c4df; }
      .system-heading span { font: 500 .8125rem/1.5 var(--mono); color: #8eb2d6; }
      .layer-path { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .5rem; margin-bottom: 1.65rem; }
      .layer-button { min-width: 0; min-height: 4.5rem; padding: .8rem .45rem; border: 1px solid #4c6580; border-radius: .5rem; background: #18334f; color: #d4e4f5; font: 600 .875rem/1.4 var(--sans); cursor: pointer; }
      .layer-button span { display: block; margin-bottom: .25rem; color: #8fb4d8; font: 400 .8125rem/1.4 var(--mono); }
      .layer-button[aria-pressed="true"] { background: #244a70; color: #fff; border-color: #83caff; box-shadow: 0 0 0 1px #83caff33; }
      .layer-button:hover:not(:disabled) { border-color: #b5dfff; }
      .layer-copy { min-height: 8.3rem; }
      .layer-copy h2 { font-size: 1.1rem; margin: 0 0 .6rem; color: #fff; }
      .layer-copy p { font-size: .9375rem; color: #bad0e5; margin: 0; line-height: 1.7; }
      .system-code { padding: .9rem 1rem; margin-top: 1.2rem; border: 1px solid #385571; border-radius: .4rem; color: #afdcff; background: #0b1c30; font: .875rem/1.7 var(--mono); white-space: pre-wrap; overflow-wrap: anywhere; }
      .system-link { display: inline-block; padding: .7rem 0 .1rem; color: #d8ebff; text-underline-offset: .3em; font-size: .9375rem; }
      .resume-section { margin-top: 0; padding: 2.8rem 0; border-top: 1px solid var(--rule); scroll-margin-top: 10rem; }
      .resume-section > h2 { padding: 0; border: 0; color: var(--ink); text-transform: none; letter-spacing: -.025em; font-size: clamp(1.5rem, 2.8vw, 2rem); line-height: 1.25; margin: 0 0 1.7rem; }
      #summary { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2.2fr); gap: 3rem; }
      #summary h2 { font-size: 1.4rem; margin: .1rem 0 0; }
      #summary p { font-size: 1.0625rem; color: #3c5369; }
      .competencies { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
      .competencies p { padding: 1.5rem; border: 1px solid #d2deeb; border-radius: .65rem; background: #f9fbfe; color: #4a6074; margin: 0 !important; box-shadow: 0 3px 0 #d8e2ed66; }
      .competencies strong { display: block; margin-bottom: .7rem; color: var(--ink); font-weight: 650; }
      #experience, #military { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2.2fr); gap: 1.6rem 3rem; }
      #experience > h2, #military > h2 { grid-column: 1; margin: 0; }
      #experience > article, #military > article { grid-column: 2; }
      #experience > article:first-of-type, #military > article:first-of-type { grid-row: 1; }
      .position { padding: 1.8rem; background: #fff; border: 1px solid #d2deeb; border-radius: .65rem; box-shadow: 0 5px 16px #1c3d5c06; }
      .position + .position { margin-top: 0; }
      .position-heading { display: flex; flex-direction: column-reverse; gap: .6rem; margin-bottom: 1.2rem; }
      .position-title { display: block; font-size: 1.15rem; line-height: 1.4; font-weight: 700; color: #153756; }
      .organization { display: block; margin-top: .4rem; color: var(--muted); }
      .dates { font: .875rem/1.5 var(--mono); color: #416385; white-space: normal; }
      .resume-list { padding-left: 1.15rem; color: #465c71; }
      .resume-list li { padding-left: .2rem; }
      .resume-list li + li { margin-top: .85rem; }
      .resume-list li::marker { color: #7498bd; }
      .project-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; }
      .project-list > li { padding: 1.8rem; border: 1px solid #c2d3e5; border-radius: .7rem; background: #fff; color: #465c71; box-shadow: 0 5px 16px #1c3d5c06; }
      .project-list strong { display: block; font-size: 1.3rem; line-height: 1.4; color: #153756; margin-bottom: .85rem; }
      .project-label { font: .8125rem/1.6 var(--mono); color: #476c91; margin-bottom: 1.4rem; }
      .project-cover { margin: -1.8rem -1.8rem 1.6rem; padding: 1.6rem 1.8rem; border-radius: .65rem .65rem 0 0; background: #123354; }
      .project-cover.mobile-network { background: #12444b; }
      .project-cover .project-label { color: #c4def5; margin-bottom: 1.1rem; }
      .component-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .7rem; }
      .component-grid .component { display: flex; flex-direction: column; min-width: 0; min-height: 5.8rem; padding: 1rem; border: 1px solid #6b94b7; border-radius: .4rem; color: #fff; background: #ffffff07; font: 600 1.1rem/1.5 var(--sans); }
      .mobile-network .component { border-color: #639ea5; }
      .component-grid small { display: block; margin-bottom: .45rem; color: #b7d4ec; font: .8125rem/1.5 var(--mono); }
      .mobile-network .component-grid small { color: #b4dbdd; }
      .project-cover-caption { margin: 1rem 0 0; font: .8125rem/1.5 var(--mono); color: #b5cfe4; }
      .mobile-network .project-cover-caption { color: #b4dbdd; }
      .project-details { margin-top: 1.5rem; border-top: 1px solid #d5e1ed; padding-top: 1rem; }
      .project-details summary { width: fit-content; padding: .2rem 0; color: #15539e; font-weight: 600; cursor: pointer; }
      .project-details summary:focus-visible, select:focus-visible { outline: 3px solid #da9e22; outline-offset: 4px; }
      .project-details p { margin: .9rem 0 !important; font-size: .9375rem; }
      .project-details a { color: #15539e; text-underline-offset: .25em; }
      .request-lab { padding: 2rem; background: #10263e; color: #edf6ff; border: 1px solid #355575; border-radius: 1rem; margin: 1rem 0 3rem; scroll-margin-top: 10rem; }
      .lab-heading { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: 1.4rem; }
      .lab-heading .eyebrow { color: #a3c5e6; margin-bottom: .6rem; }
      .lab-heading h2 { font-size: clamp(1.5rem, 3vw, 2rem); margin: 0; line-height: 1.2; letter-spacing: -.02em; }
      .source-link { color: #b6dfff; font-size: .9375rem; text-underline-offset: .25em; }
      .lab-intro { margin: 0 0 1.7rem; color: #bdd0e4; max-width: 69ch; }
      .lab-grid { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: 1.5rem; }
      .request-controls { min-width: 0; }
      .request-controls label { display: block; margin-bottom: .5rem; font-size: .9375rem; font-weight: 600; }
      .request-controls select { display: block; width: 100%; min-height: 3rem; padding: .7rem; border: 1px solid #6a89a8; border-radius: .4rem; background: #173650; color: #fff; font: .9375rem/1.5 var(--sans); }
      .request-address { margin: 1rem 0; padding: 1rem; border-radius: .4rem; background: #091c2d; color: #b5defe; font: .9375rem/1.5 var(--mono); overflow-wrap: anywhere; }
      .request-controls .button { width: 100%; background: #d4ebff; border-color: #d4ebff; color: #103756; }
      .request-controls .button:hover { background: #fff; }
      .lab-note { font-size: .875rem; line-height: 1.65; margin: 1rem 0; color: #aac5de; }
      .lab-note a { text-underline-offset: .2em; }
      .request-result { min-width: 0; background: #0b1c30; border: 1px solid #385571; border-radius: .55rem; padding: 1.3rem; }
      .result-meta { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: .6rem; padding-bottom: .9rem; border-bottom: 1px solid #2b465f; font: .875rem/1.5 var(--mono); }
      .response-status { color: #bdd0e4; }
      .response-status[data-state="pass"] { color: #9ee0c8; }
      .response-status[data-state="error"] { color: #ffb7af; }
      .response-time { color: #a4c3e0; }
      .response-body { margin: 1rem 0; min-height: 7rem; max-height: 14rem; overflow: auto; color: #c5d9ec; white-space: pre-wrap; overflow-wrap: anywhere; font: .875rem/1.7 var(--mono); }
      .response-headers { border-top: 1px solid #2b465f; padding-top: .8rem; color: #bdd0e4; }
      .response-headers summary { padding: .2rem 0; width: fit-content; cursor: pointer; font-size: .875rem; }
      .response-headers dl { margin: 1rem 0 0; font: .8125rem/1.7 var(--mono); }
      .response-headers dt { color: #8db9e2; margin-top: .6rem; }
      .response-headers dd { margin: .2rem 0 0; overflow-wrap: anywhere; }
      .response-message { margin: 1rem 0 0; color: #afcce4; font-size: .875rem; min-height: 1.5em; }
      .education-line { padding: 1.1rem 0; border-bottom: 1px solid #d0dce8; }
      .education-line strong { color: #153756; }
      .resume-footer { margin: 1rem 0 0; padding: 1.8rem 0; font-size: .8125rem; border-color: #c1d2e2; text-align: left; }
      @media (prefers-reduced-motion: no-preference) {
        .button, .action, .layer-button { transition: background .18s, border-color .18s, transform .18s; }
        .button:hover:not(:disabled), .action:hover { transform: translateY(-2px); }
        .project-list > li { transition: transform .22s, box-shadow .22s; }
        .project-list > li:hover { transform: translateY(-4px); box-shadow: 0 14px 28px #1c3d5c12; }
        .intro-grid { animation: intro-enter .5s ease-out both; }
        @keyframes intro-enter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      }
      @media (max-width: 900px) {
        .intro-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 2rem; }
        .resume-header h1 { font-size: clamp(2.7rem, 6.2vw, 4rem); }
        #summary, #experience, #military { grid-template-columns: 1fr; gap: 1.4rem; }
        #experience > article, #military > article { grid-column: 1; }
        #experience > article:first-of-type, #military > article:first-of-type { grid-row: auto; }
      }
      @media (max-width: 700px) {
        .page-shell { padding-top: 2.3rem; }
        .site-bar-inner, .resume-document { width: calc(100% - 2rem); }
        .site-bar-inner { gap: .75rem; }
        .site-nav { flex-wrap: nowrap; overflow-x: auto; padding-bottom: .1rem; gap: 1.2rem; }
        .site-nav a { white-space: nowrap; flex-shrink: 0; }
        .site-brand { width: auto; }
        .site-actions { width: auto; display: flex; }
        .site-actions .action { font-size: .8125rem; min-height: 2.6rem; padding: .5rem .65rem; }
        .intro-grid, .competencies, .project-list, .lab-grid { grid-template-columns: 1fr; }
        .intro-grid { gap: 2.5rem; padding-bottom: 2.5rem; }
        .resume-header h1 { font-size: clamp(2.8rem, 10vw, 4.3rem); }
        .contact-line { align-items: flex-start; flex-direction: row; }
        .system-card { box-shadow: 6px 6px 0 #d1deeb, 0 18px 30px #18365012; }
        .layer-copy { min-height: 0; }
        .resume-section { padding: 2.2rem 0; }
        .position, .project-list > li, .request-lab { padding: 1.25rem; }
        .project-cover { margin: -1.25rem -1.25rem 1.25rem; padding: 1.25rem; }
        .request-lab { margin-bottom: 2rem; }
      }
      @media (max-width: 430px) {
        .site-brand { width: 100%; }
        .site-actions { width: 100%; margin: 0; }
        .site-actions .action { flex: 1; }
        .resume-section, .request-lab { scroll-margin-top: 13rem; }
      }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      .action:hover { transform: none; }
    }
`;

export const SITE_EXPLORER = `
      <aside class="system-card screen-only" aria-labelledby="system-title">
        <div class="system-heading"><p id="system-title">Inside this website</p><span id="layer-position">02 / 03</span></div>
        <div class="layer-path" role="group" aria-label="Explore the request path">
          <button class="layer-button" type="button" data-layer="browser" aria-pressed="false" disabled><span>01</span>Browser</button>
          <button class="layer-button" type="button" data-layer="worker" aria-pressed="true" disabled><span>02</span>Worker</button>
          <button class="layer-button" type="button" data-layer="response" aria-pressed="false" disabled><span>03</span>Response</button>
        </div>
        <div class="layer-copy" aria-live="polite" aria-atomic="true">
          <h2 id="layer-title">A small application at the edge.</h2>
          <p id="layer-description">A Cloudflare Worker routes each request to the resume, health check, or crawler metadata. Unsupported paths receive a controlled 404.</p>
        </div>
        <div class="system-code" id="layer-code">GET /          → HTML\nGET /healthz   → JSON</div>
        <a class="system-link" href="#inside-site">Inspect a real response ↓</a>
      </aside>
`;

export const REQUEST_LAB = `
      <section class="request-lab screen-only" id="inside-site" aria-labelledby="lab-title">
        <div class="lab-heading">
          <div><p class="eyebrow">THE WEBSITE AS A PROJECT</p><h2 id="lab-title">Follow a request.</h2></div>
          <a class="source-link" href="https://github.com/N7Septimo/dot7eamWorks" rel="noreferrer">Explore the source ↗</a>
        </div>
        <p class="lab-intro">Choose a route and inspect this website's actual response. The status, response body, and security headers come from the Worker serving this page.</p>
        <div class="lab-grid">
          <div class="request-controls">
            <label for="request-scenario">What would you like to inspect?</label>
            <select id="request-scenario" disabled>
              <option value="health">Health check · JSON response</option>
              <option value="metadata">Search visibility · robots.txt</option>
              <option value="missing">Unknown route · controlled 404</option>
            </select>
            <p class="request-address" id="request-address">GET /healthz</p>
            <button class="button" type="button" id="run-request" disabled>Run request</button>
            <p class="lab-note">Timing measures one round trip from your browser to this website. A check runs only when you request it.</p>
            <p class="lab-note">Changes are checked with request tests and a Worker dry run. <a href="https://github.com/N7Septimo/dot7eamWorks/actions/workflows/resume-check.yml" rel="noreferrer">View the validation workflow ↗</a></p>
            <noscript><p class="lab-note">Enable JavaScript to use the inspector, or <a href="/healthz">open the health response</a> directly.</p></noscript>
          </div>
          <div class="request-result" id="request-result" aria-busy="false">
            <div class="result-meta"><span class="response-status" id="response-status">Not run</span><span class="response-time" id="response-time">Round trip —</span></div>
            <pre class="response-body" id="response-body">The response will appear here.</pre>
            <details class="response-headers"><summary>Response headers</summary><dl id="response-headers"><dt>No response yet</dt><dd>Run a request to inspect its headers.</dd></dl></details>
            <p class="response-message" id="response-message" role="status" aria-atomic="true">Ready to inspect /healthz.</p>
          </div>
        </div>
      </section>
`;

// This function also runs in the browser. Keep its dependencies self-contained.
export async function inspectRoute(scenario, fetcher = globalThis.fetch, clock = () => performance.now()) {
  const routes = {
    health: { path: "/healthz", status: 200 },
    metadata: { path: "/robots.txt", status: 200 },
    missing: { path: "/showcase-missing-route", status: 404 },
  };
  if (!Object.hasOwn(routes, scenario)) throw new Error("Choose one of the available routes.");
  const route = routes[scenario];
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  const start = clock();
  try {
    const response = await fetcher(route.path, {
      method: "GET", cache: "no-store", credentials: "omit", redirect: "error", signal: controller.signal,
    });
    const rawBody = await response.text();
    const elapsed = Math.max(0, Math.round(clock() - start));
    let body = rawBody;
    let valid = response.status === route.status;
    if (scenario === "health") {
      try {
        const data = JSON.parse(rawBody);
        body = JSON.stringify(data, null, 2);
        valid = valid && data?.status === "ok" && data?.service === "resume" && typeof data?.release === "string";
      } catch { valid = false; }
    }
    const headers = ["content-type", "cache-control", "content-security-policy", "x-content-type-options", "referrer-policy"]
      .map((name) => [name, response.headers.get(name) ?? "Not present"]);
    return { path: route.path, status: response.status, expectedStatus: route.status, valid, elapsed, body: body.slice(0, 4000), headers };
  } finally {
    clearTimeout(timeout);
  }
}

export const SHOWCASE_SCRIPT = `
    (() => {
      const inspectRoute = ${inspectRoute.toString()};
      const layers = {
        browser: {
          title: "Readable first. Interactive when needed.",
          description: "Semantic HTML carries the resume. Responsive styles adapt the layout, and JavaScript adds the explorer and request inspector. Printing uses the same resume content.",
          code: "HTML + CSS + JavaScript\\nScreen layout / print layout"
        },
        worker: {
          title: "A small application at the edge.",
          description: "A Cloudflare Worker routes each request to the resume, health check, or crawler metadata. Unsupported paths receive a controlled 404.",
          code: "GET /          → HTML\\nGET /healthz   → JSON"
        },
        response: {
          title: "An explicit response for every route.",
          description: "The Worker accepts GET and HEAD. Application responses carry security headers; health responses disable caching. The inspector below shows the headers actually returned.",
          code: "GET /healthz   → 200\\nUnknown route  → 404\\nUnsupported method → 405"
        }
      };
      document.querySelectorAll("[data-layer]").forEach((button) => {
        button.disabled = false;
        button.addEventListener("click", () => {
          const layer = layers[button.dataset.layer];
          if (!layer) return;
          document.querySelectorAll("[data-layer]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
          document.getElementById("layer-title").textContent = layer.title;
          document.getElementById("layer-description").textContent = layer.description;
          document.getElementById("layer-code").textContent = layer.code;
          document.getElementById("layer-position").textContent = "0" + (Object.keys(layers).indexOf(button.dataset.layer) + 1) + " / 03";
        });
      });

      const select = document.getElementById("request-scenario");
      const run = document.getElementById("run-request");
      const result = document.getElementById("request-result");
      const status = document.getElementById("response-status");
      const timing = document.getElementById("response-time");
      const body = document.getElementById("response-body");
      const headers = document.getElementById("response-headers");
      const message = document.getElementById("response-message");
      const paths = { health: "/healthz", metadata: "/robots.txt", missing: "/showcase-missing-route" };
      select.disabled = false;
      run.disabled = false;
      const resetResponse = () => {
        status.textContent = "Not run";
        status.removeAttribute("data-state");
        timing.textContent = "Round trip —";
        body.textContent = "The response will appear here.";
        headers.replaceChildren();
        message.textContent = "Ready to inspect " + paths[select.value] + ".";
      };
      select.addEventListener("change", () => {
        document.getElementById("request-address").textContent = "GET " + paths[select.value];
        resetResponse();
      });
      run.addEventListener("click", async () => {
        resetResponse();
        run.disabled = true;
        select.disabled = true;
        run.textContent = "Requesting…";
        result.setAttribute("aria-busy", "true");
        status.textContent = "Requesting…";
        message.textContent = "Request in progress.";
        try {
          const response = await inspectRoute(select.value);
          status.textContent = "HTTP " + response.status + (response.valid ? " · expected" : " · unexpected");
          status.dataset.state = response.valid ? "pass" : "error";
          timing.textContent = "Round trip " + response.elapsed + " ms";
          body.textContent = response.body;
          response.headers.forEach(([name, value]) => {
            const term = document.createElement("dt");
            const definition = document.createElement("dd");
            term.textContent = name;
            definition.textContent = value;
            headers.append(term, definition);
          });
          message.textContent = response.valid
            ? "Expected response received from " + response.path + " at " + new Date().toLocaleTimeString() + "."
            : "The response did not match this route's expected result. Inspect the body and headers above.";
        } catch (error) {
          status.textContent = "Check unavailable";
          status.dataset.state = "error";
          body.textContent = "No response received.";
          message.textContent = error.name === "AbortError" ? "The request timed out after 8 seconds. You can try again." : "The request could not complete. Check your connection and try again.";
        } finally {
          result.setAttribute("aria-busy", "false");
          run.textContent = "Run request";
          run.disabled = false;
          select.disabled = false;
        }
      });

      const links = Array.from(document.querySelectorAll(".site-nav a"));
      const sections = links.map((link) => document.querySelector(link.getAttribute("href")));
      const progress = document.querySelector(".reading-progress");
      const bar = document.querySelector(".site-bar");
      let pending = false;
      function updateNavigation() {
        pending = false;
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = "scaleX(" + (distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0) + ")";
        let current = -1;
        sections.forEach((section, index) => {
          if (section && section.getBoundingClientRect().top <= bar.getBoundingClientRect().height + 50) current = index;
        });
        links.forEach((link, index) => {
          if (index === current) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
      const queueNavigation = () => { if (!pending) { pending = true; requestAnimationFrame(updateNavigation); } };
      window.addEventListener("scroll", queueNavigation, { passive: true });
      window.addEventListener("resize", queueNavigation, { passive: true });
      updateNavigation();
    })();
`;
