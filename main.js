export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Example intercept
    if (url.pathname === "/resume" || url.pathname.startsWith("/resume/")) {
      // Option A: serve a static response
      return new Response("Resume here", { headers: { "content-type": "text/plain" } });

      // Option B: forward to a different hostname (recommended) like a tunnel host
      // return fetch("https://rbustamante.dot7eam.io" + url.pathname + url.search, request);
    }

    // Default: send to your normal origin (EC2) by passing through
    return fetch(request);
  }
};
