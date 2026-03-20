export default {
  async fetch(request, env) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rodolfo Bustamante | IT Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=JetBrains+Mono&family=Courier+Prime&display=swap" rel="stylesheet">
    <style>
        :root { --font: 'IBM Plex Mono', monospace; }
        body { 
            font-family: var(--font); 
            line-height: 1.6; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px 20px; 
            background: #fff; 
            color: #1a1a1a; 
        }
        header { border-bottom: 2px solid #1a1a1a; padding-bottom: 20px; margin-bottom: 30px; }
        .controls { text-align: right; margin-bottom: 20px; }
        select { padding: 5px; font-family: inherit; cursor: pointer; }
        h2 { color: #0044cc; border-bottom: 1px solid #ddd; }
        .meta { color: #666; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="controls">
        <label for="fontSelect">Terminal Font: </label>
        <select id="fontSelect">
            <option value="ibm">IBM Plex</option>
            <option value="jetbrains">JetBrains</option>
            <option value="courier">Courier</option>
        </select>
    </div>

    <header>
        <h1>Rodolfo Bustamante</h1>
        <p>IT Specialist | Systems Admin | U.S. Marine Corps Veteran</p>
        <div class="meta">Tucson, AZ | 7eam.elrudybustamante.workers.dev</div>
    </header>

    <section>
        <h2>Experience</h2>
        <p><strong>IT Support Associate II</strong> — Amazon</p>
        <p><strong>Aviation Electronics</strong> — USMC / AZ National Guard</p>
    </section>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const fontSelect = document.getElementById("fontSelect");
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

            const saved = localStorage.getItem("preferredFont");
            if (saved && fonts[saved]) {
                document.documentElement.style.setProperty("--font", fonts[saved]);
                fontSelect.value = saved;
            }
        });
    </script>
</body>
</html>
    `;

    return new Response(html, {
        headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
