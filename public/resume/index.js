document.addEventListener("DOMContentLoaded", () => {
  const fontSelect = document.getElementById("fontSelect");

  if (!fontSelect) return;

  const fonts = {
    ibm: "'IBM Plex Mono', monospace",
    jetbrains: "'JetBrains Mono', monospace",
    courier: "'Courier Prime', monospace"
  };

  fontSelect.addEventListener("change", (e) => {
    const font = fonts[e.target.value];
    if (font) {
      document.documentElement.style.setProperty("--font", font);
      localStorage.setItem("preferredFont", e.target.value);
    }
  });

  // Restore saved font
  const saved = localStorage.getItem("preferredFont");
  if (saved && fonts[saved]) {
    document.documentElement.style.setProperty("--font", fonts[saved]);
    fontSelect.value = saved;
  }
});
