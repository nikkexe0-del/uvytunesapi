import { Hono } from 'hono'

export const Home = new Hono()

Home.get('/', (c) => {
  const title = 'uvytunes'
  const description =
    'Unofficial JioSaavn API wrapper in TypeScript. Access songs, albums, artists, playlists, and more.'
  const previewImage =
    'https://raw.githubusercontent.com/nikkexe0-del/uvytunesapi/main/assets/preview.png'
  const siteUrl = 'https://uvytunesapi.vercel.app/'

  return c.html(
    <html lang="en" class="light">
      <head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content="uvytunes, JioSaavn API, Music API, uvytunes API, Songs, Albums, Playlists" />
        <meta name="author" content="uvytunes" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={previewImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={previewImage} />
        <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/nikkexe0-del/uvytunesapi/main/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root {
  --bg: #f5f4f0;
  --bg-card: #ffffff;
  --bg-inset: #eeecea;
  --dot: #d6d4ce;
  --text: #1a1a1a;
  --text-soft: #4a4a4a;
  --text-muted: #8a8a8a;
  --border: #e2e0dc;
  --accent: #1a1a1a;
  --accent-hover: #333333;
  --accent-fg: #f5f4f0;
  --hero-bg: #1a1a1a;
  --hero-fg: #f5f4f0;
  --hero-dot: rgba(255,255,255,0.06);
  --toggle-bg: #e2e0dc;
  --toggle-knob: #ffffff;
  --tag-bg: #eeecea;
  --tag-text: #4a4a4a;
}
.dark {
  --bg: #0e0e0e;
  --bg-card: #161616;
  --bg-inset: #1e1e1e;
  --dot: #222222;
  --text: #e8e8e8;
  --text-soft: #a0a0a0;
  --text-muted: #666666;
  --border: #262626;
  --accent: #e8e8e8;
  --accent-hover: #cccccc;
  --accent-fg: #0e0e0e;
  --hero-bg: #e8e8e8;
  --hero-fg: #0e0e0e;
  --hero-dot: rgba(0,0,0,0.06);
  --toggle-bg: #262626;
  --toggle-knob: #e8e8e8;
  --tag-bg: #222222;
  --tag-text: #a0a0a0;
}
* { font-family: 'IBM Plex Mono', monospace; margin: 0; padding: 0; box-sizing: border-box; }
body {
  background-color: var(--bg);
  background-image: radial-gradient(circle, var(--dot) 1px, transparent 1px);
  background-size: 20px 20px;
  color: var(--text);
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}
.hero {
  background: var(--hero-bg);
  color: var(--hero-fg);
  position: relative;
  overflow: hidden;
  transition: background 0.3s, color 0.3s;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--hero-dot) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  pointer-events: none;
}
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}
.card:hover {
  border-color: var(--accent);
}
.dark .card:hover {
  box-shadow: 0 2px 16px rgba(255,255,255,0.03);
}
.pill {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.14px;
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
  border: 0;
}
.pill-primary {
  background: var(--accent);
  color: var(--accent-fg);
}
.pill-primary:hover {
  background: var(--accent-hover);
}
.mono-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.heading-display {
  font-weight: 500;
  letter-spacing: -1.4px;
  line-height: 1;
  color: var(--text);
}
.body-text {
  font-weight: 400;
  letter-spacing: -0.04px;
  line-height: 1.6;
  color: var(--text-soft);
}
.code-block {
  background: var(--bg-inset);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 12px 16px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--text);
  overflow-x: auto;
}
.tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: var(--tag-bg);
  color: var(--tag-text);
}
.endpoint-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  background: var(--bg-inset);
  border: 1px solid var(--border);
}
.endpoint-method {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  min-width: 32px;
}
.endpoint-path {
  font-size: 12px;
  color: var(--text-soft);
}
.footer-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.15s ease;
}
.footer-link:hover {
  color: var(--accent);
}
.toggle-wrap {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
}
.toggle-btn {
  width: 52px;
  height: 28px;
  border-radius: 9999px;
  background: var(--toggle-bg);
  border: 1px solid var(--border);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 4px;
}
.toggle-knob {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--toggle-knob);
  transition: transform 0.3s ease, background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
.dark .toggle-knob {
  transform: translateX(24px);
}
.toggle-icon {
  width: 12px;
  height: 12px;
}
.hero-subtitle {
  font-size: 15px;
  color: var(--hero-fg);
  opacity: 0.6;
  line-height: 1.7;
}
.hero-version {
  color: var(--hero-fg);
  opacity: 0.5;
}
.section-heading {
  font-size: clamp(22px, 4vw, 30px);
}
.hero-heading {
  font-size: clamp(40px, 8vw, 64px);
}
.feature-desc {
  font-size: 13px;
}
.copyright {
  font-size: 11px;
}
`
          }}
        />
      </head>
      <body>
        <div class="toggle-wrap">
          <button class="toggle-btn" onclick="toggleTheme()" aria-label="Toggle theme">
            <div class="toggle-knob">
              <svg class="toggle-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
              <svg class="toggle-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </div>
          </button>
        </div>

        <section class="hero py-20 md:py-28 px-6 flex flex-col items-center text-center">
          <div class="max-w-2xl mx-auto relative z-10">
            <span class="mono-label block mb-5 hero-version">v0.1.0 — unofficial</span>
            <h1 class="heading-display hero-heading">uvytunes</h1>
            <p class="mt-5 max-w-md mx-auto hero-subtitle">
              Unofficial JioSaavn API. Search, stream, and download songs, albums, artists, and playlists.
            </p>
            <a href="/docs" class="pill pill-primary mt-8">Explore the Docs</a>
          </div>
        </section>

        <main class="px-6 py-16 md:py-24">
          <div class="max-w-2xl mx-auto space-y-6">
            <div class="card rounded-lg p-6 sm:p-8">
              <span class="mono-label block mb-3" style="color: var(--accent);">Quick Start</span>
              <h2 class="heading-display section-heading">Get started in seconds</h2>
              <p class="mt-3 body-text max-w-lg">
                Hit the API from any HTTP client. No auth required — just search, fetch, and stream.
              </p>
              <div class="code-block mt-5">GET /api/search/songs?query=tum+hi+ho</div>
            </div>

            <div class="card rounded-lg p-6 sm:p-8">
              <span class="mono-label block mb-3" style="color: var(--accent);">Endpoints</span>
              <h2 class="heading-display section-heading">Every route you need</h2>
              <p class="mt-3 body-text max-w-lg">Search, browse, and stream — all in one API.</p>
              <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/search/songs</span></div>
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/search/albums</span></div>
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/search/artists</span></div>
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/search/playlists</span></div>
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/songs/:id</span></div>
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/albums/:id</span></div>
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/artists/:id</span></div>
                <div class="endpoint-row"><span class="endpoint-method">GET</span><span class="endpoint-path">/api/playlists/:id</span></div>
              </div>
            </div>

            <div class="card rounded-lg p-6 sm:p-8">
              <span class="mono-label block mb-3" style="color: var(--accent);">Built for developers</span>
              <h2 class="heading-display section-heading">Why uvytunes</h2>
              <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span class="tag mb-2 block">Fast</span>
                  <p class="body-text feature-desc">Optimized for low latency. Songs return in under 200ms.</p>
                </div>
                <div>
                  <span class="tag mb-2 block">Open</span>
                  <p class="body-text feature-desc">No API keys. No rate limits. Fully open source.</p>
                </div>
                <div>
                  <span class="tag mb-2 block">Reliable</span>
                  <p class="body-text feature-desc">Backed by JioSaavn. Multiple quality tiers for streaming.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="px-6 py-8 flex flex-col items-center text-center" style="border-top: 1px solid var(--border);">
          <div class="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/docs" class="footer-link">Docs</a>
            <a href="https://github.com/nikkexe0-del" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
            <a href="https://instagram.com/nikkk.exe" target="_blank" rel="noopener noreferrer" class="footer-link">Instagram</a>
          </div>
          <span class="mono-label copyright">&copy; {new Date().getFullYear()} uvytunes</span>
        </footer>

        <script dangerouslySetInnerHTML={{ __html: `
          function toggleTheme() {
            var html = document.documentElement;
            var sun = document.querySelector('.sun-icon');
            var moon = document.querySelector('.moon-icon');
            if (html.classList.contains('dark')) {
              html.classList.remove('dark');
              html.classList.add('light');
              sun.style.display = '';
              moon.style.display = 'none';
              localStorage.setItem('theme', 'light');
            } else {
              html.classList.remove('light');
              html.classList.add('dark');
              sun.style.display = 'none';
              moon.style.display = '';
              localStorage.setItem('theme', 'dark');
            }
          }
          (function() {
            var saved = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            var theme = saved || (prefersDark ? 'dark' : 'light');
            var html = document.documentElement;
            var sun = document.querySelector('.sun-icon');
            var moon = document.querySelector('.moon-icon');
            html.classList.remove('light', 'dark');
            html.classList.add(theme);
            if (theme === 'dark') { sun.style.display = 'none'; moon.style.display = ''; }
          })();
        ` }} />
      </body>
    </html>
  )
})
