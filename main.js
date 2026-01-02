export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Example: only allow /resume
    if (!url.pathname.startsWith("/resume")) {
      return new Response("Not Found", { status: 404 });
    }

    // Hand off to Cloudflare routing (assets or tunnel)
    return fetch(request);
  }
};
