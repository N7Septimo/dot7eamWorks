const fontSelect = document.getElementById('fontSelect');

fontSelect.addEventListener('change', e => {
  const map = {
    ibm: "'IBM Plex Mono', monospace",
    jetbrains: "'JetBrains Mono', monospace",
    courier: "'Courier Prime', monospace"
  };
  document.documentElement.style.setProperty('--font', map[e.target.value]);
});
