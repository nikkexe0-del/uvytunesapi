import { Hono } from 'hono'

export const Home = new Hono()

Home.get('/', (c) => {
  const title = 'uvytunes API'
  const description =
    'Unofficial JioSaavn API wrapper in TypeScript. Access songs, albums, artists, playlists, and more.'
  const previewImage =
    'https://raw.githubusercontent.com/nikkexe0-del/uvytunesapi/main/assets/preview.png'
  const siteUrl = 'https://uvytunesapi.vercel.app/'

  return c.html(
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content="uvytunes API, JioSaavn API, Music API, Songs, Albums, Playlists" />
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
        <script src="https://unpkg.com/lucide@latest"></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
* { font-family: 'IBM Plex Mono', monospace; margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #0e0e0e;
  --bg-card: #161616;
  --bg-inset: #1c1c1c;
  --dot: #1a1a1a;
  --text: #e8e8e8;
  --text-soft: #a0a0a0;
  --text-muted: #555555;
  --border: #232323;
  --accent: #e8e8e8;
  --accent-hover: #cccccc;
  --accent-fg: #0e0e0e;
  --hero-dot: rgba(255,255,255,0.04);
}

body {
  background-color: var(--bg);
  background-image: radial-gradient(circle, var(--dot) 1px, transparent 1px);
  background-size: 20px 20px;
  color: var(--text);
  min-height: 100vh;
}

.hero {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
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
  transition: border-color 0.2s ease;
}

.card:hover {
  border-color: #333333;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
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
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: var(--bg-inset);
  color: var(--text-soft);
  border: 1px solid var(--border);
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
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.15s ease;
}

.footer-link:hover {
  color: var(--accent);
}

.icon-sm { width: 14px; height: 14px; }
.icon-md { width: 16px; height: 16px; }
.icon-lg { width: 20px; height: 20px; }

.hero-heading { font-size: clamp(40px, 8vw, 64px); text-align: left; }
.hero-subtitle { font-size: 15px; color: var(--text-soft); line-height: 1.7; text-align: left; }
.section-heading { font-size: clamp(22px, 4vw, 30px); }
.feature-desc { font-size: 13px; }
.copyright { font-size: 11px; }
.hero-version { color: var(--text-muted); }
`
          }}
        />
      </head>
      <body>
        <section class="hero py-20 md:py-28 px-6">
          <div class="max-w-2xl mx-auto relative z-10">
            <h1 class="heading-display hero-heading">uvytunes API</h1>
            <p class="mt-5 max-w-md hero-subtitle">
              Unofficial JioSaavn API. Search, stream, and download songs, albums, artists, and playlists.
            </p>
            <a href="/docs" class="pill pill-primary mt-8">
              <i data-lucide="book-open" class="icon-sm"></i>
              Explore the Docs
            </a>
          </div>
        </section>

        <main class="px-6 py-16 md:py-24">
          <div class="max-w-2xl mx-auto space-y-6">

            <div class="card rounded-lg p-6 sm:p-8">
              <span class="mono-label flex items-center gap-2 mb-3">
                <i data-lucide="terminal" class="icon-sm"></i>
                Quick Start
              </span>
              <h2 class="heading-display section-heading">Get started in seconds</h2>
              <p class="mt-3 body-text max-w-lg">
                Hit the API from any HTTP client. No auth required — just search, fetch, and stream.
              </p>
              <div class="code-block mt-5 flex items-center gap-2">
                <i data-lucide="arrow-right" class="icon-sm" style="color: var(--text-muted);"></i>
                GET /api/search/songs?query=tum+hi+ho
              </div>
            </div>

            <div class="card rounded-lg p-6 sm:p-8">
              <span class="mono-label flex items-center gap-2 mb-3">
                <i data-lucide="route" class="icon-sm"></i>
                Endpoints
              </span>
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
              <span class="mono-label flex items-center gap-2 mb-3">
                <i data-lucide="zap" class="icon-sm"></i>
                Built for developers
              </span>
              <h2 class="heading-display section-heading">Why uvytunes</h2>
              <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span class="tag mb-2">
                    <i data-lucide="gauge" class="icon-sm"></i>
                    Fast
                  </span>
                  <p class="body-text feature-desc">Optimized for low latency. Songs return in under 200ms.</p>
                </div>
                <div>
                  <span class="tag mb-2">
                    <i data-lucide="unlock" class="icon-sm"></i>
                    Open
                  </span>
                  <p class="body-text feature-desc">No API keys. No rate limits. Fully open source.</p>
                </div>
                <div>
                  <span class="tag mb-2">
                    <i data-lucide="shield-check" class="icon-sm"></i>
                    Reliable
                  </span>
                  <p class="body-text feature-desc">Backed by JioSaavn. Multiple quality tiers for streaming.</p>
                </div>
              </div>
            </div>

          </div>
        </main>

        <footer class="px-6 py-8" style="border-top: 1px solid var(--border);">
          <div class="max-w-2xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div class="flex gap-6">
              <a href="/operations" class="footer-link">
                <i data-lucide="list" class="icon-sm"></i>
                Operations
              </a>
              <a href="/docs" class="footer-link">
                <i data-lucide="book-open" class="icon-sm"></i>
                Docs
              </a>
              <a href="https://github.com/nikkexe0-del" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i data-lucide="github" class="icon-sm"></i>
                GitHub
              </a>
              <a href="https://instagram.com/nikkk.exe" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i data-lucide="instagram" class="icon-sm"></i>
                Instagram
              </a>
            </div>
            <span class="mono-label copyright flex items-center gap-2">
              <i data-lucide="music" class="icon-sm"></i>
              &copy; {new Date().getFullYear()} uvytunes API
            </span>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{ __html: `lucide.createIcons();` }} />
      </body>
    </html>
  )
})
