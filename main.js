export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/RBustamante")) {
      // auth, headers, logging, etc.
    }

    // Hand request back to Cloudflare routing
    return fetch(request);
  }
};
