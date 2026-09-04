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
      font-size: 14px;
      line-height: 1.4;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; }
    a:focus-visible, button:focus-visible {
      outline: 3px solid #f4c95d;
      outline-offset: 3px;
    }

    .skip-link {
      position: fixed; left: 1rem; top: -5rem; z-index: 20;
      padding: 0.7rem 1rem; border-radius: 0.35rem;
      background: #fff; color: #10253a; font-weight: 700;
    }
    .skip-link:focus { top: 1rem; }

    .site-bar {
      position: sticky; top: 0; z-index: 10;
      border-bottom: 1px solid rgba(255, 255, 255, 0.13);
      background: rgba(20, 40, 61, 0.97); color: var(--toolbar-text);
      box-shadow: 0 6px 22px rgba(21, 38, 55, 0.14); backdrop-filter: blur(12px);
    }
    .site-bar-inner {
      display: flex; align-items: center; justify-content: space-between;
      width: min(8.5in, calc(100% - 1.5rem)); min-height: 3.7rem; margin: 0 auto; gap: 1rem;
    }
    .site-brand { font-size: 0.8rem; font-weight: 800; letter-spacing: 0.075em; text-decoration: none; text-transform: uppercase; white-space: nowrap; }
    .site-nav { display: flex; align-items: center; gap: 0.9rem; margin-left: auto; }
    .site-nav a { color: var(--toolbar-muted); font-size: 0.8rem; font-weight: 700; text-decoration: none; }
    .site-nav a:hover { color: #fff; }
    .site-actions { display: flex; gap: 0.5rem; }
    .action {
      display: inline-flex; align-items: center; justify-content: center; min-height: 2.25rem;
      padding: 0.5rem 0.75rem; border: 1px solid rgba(255, 255, 255, 0.25); border-radius: 0.35rem;
      background: transparent; color: #fff; font: 700 0.78rem/1 var(--sans); text-decoration: none; cursor: pointer;
    }
    .action.primary { border-color: #fff; background: #fff; color: #173f63; }
    .action:hover { transform: translateY(-1px); }

    .page-shell { width: 100%; padding: 2rem 0 3.5rem; }
    .resume-document {
      width: min(8.5in, calc(100% - 1.5rem)); min-height: 11in; margin: 0 auto;
      padding: 0.5in 0.5in; background: var(--paper); box-shadow: var(--paper-shadow);
    }

    .resume-header { margin-bottom: 0.25in; text-align: center; }
    .resume-header h1 { margin: 0 0 0.05in; color: var(--blue); font-size: 2rem; line-height: 1.1; letter-spacing: 0.02em; text-transform: uppercase; }
    .resume-title { margin: 0 0 0.05in; color: #2a2a2a; font-size: 1rem; font-weight: 800; text-transform: uppercase; }
    .contact-line { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem; margin: 0; padding: 0; color: var(--muted); font-size: 0.9rem; list-style: none; }
    .contact-line li + li::before { margin-right: 0.4rem; color: #90979e; content: "|"; }
    .contact-line a { text-decoration: none; }

    .resume-section { margin-top: 0.2in; scroll-margin-top: 5rem; }
    .resume-section > h2 {
      margin: 0 0 0.1in; padding-bottom: 0.04in; border-bottom: 1px solid var(--rule);
      color: var(--blue); font-size: 1rem; line-height: 1.2; text-transform: uppercase;
    }
    
    .competencies p { margin: 0 0 0.08in 0; }
    .competencies strong { color: #202020; }

    .position { margin-bottom: 0.15in; }
    .position-heading {
      display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.05in;
    }
    .position-heading p { margin: 0; }
    .position-title { font-weight: 800; }
    .organization { font-weight: 400; }
    .dates { color: var(--muted); font-style: italic; white-space: nowrap; margin-left: 1rem; }

    .resume-list, .project-list { margin: 0; padding-left: 0.25in; }
    .resume-list li, .project-list li { margin-bottom: 0.04in; padding-left: 0.05in; }
    
    .project-list strong { color: var(--blue-dark); }
    .education-line { margin: 0 0 0.05in 0; }
    .education-line strong { color: var(--blue-dark); }

    .resume-footer { margin-top: 0.3in; padding-top: 0.1in; border-top: 1px solid #d9e0e6; color: var(--muted); font-size: 0.75rem; text-align: center; }

    @media print {
      @page { size: letter; margin: 0.5in; }
      body { background: #fff; color: #111; font-size: 9.5pt; line-height: 1.3; }
      .site-bar, .skip-link, .resume-footer { display: none !important; }
      .page-shell { padding: 0; }
      .resume-document { width: 100%; min-height: auto; margin: 0; padding: 0; box-shadow: none; }
      
      .resume-header { margin-bottom: 0.15in; }
      .resume-header h1 { font-size: 18pt; }
      .resume-title { font-size: 10pt; }
      .contact-line { font-size: 9pt; }
      
      .resume-section { margin-top: 0.15in; }
      .resume-section > h2 { margin-bottom: 0.08in; padding-bottom: 0.02in; font-size: 11pt; }
      
      .position { margin-bottom: 0.12in; }
      .position-heading { margin-bottom: 0.04in; }
      .dates { margin-left: 0.5in; }
      
      .competencies p { margin-bottom: 0.06in; }
      .resume-list li, .project-list li { margin-bottom: 0.03in; }
      
      #military { break-before: auto; }
      .position { break-inside: avoid; }
      h1, h2, h3, .position-heading { break-after: avoid; }
      a { text-decoration: none; color: #111; }
    }
  </style>
