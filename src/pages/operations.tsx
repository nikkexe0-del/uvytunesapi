import { Hono } from 'hono'

export const Operations = new Hono()

Operations.get('/operations', (c) => {
  return c.html(
    <html lang="en">
      <head>
        <title>Operations — uvytunes API</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/nikkexe0-del/uvytunesapi/main/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <script src="https://unpkg.com/lucide@latest" />
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
}

body {
  background-color: var(--bg);
  background-image: radial-gradient(circle, var(--dot) 1px, transparent 1px);
  background-size: 20px 20px;
  color: var(--text);
  min-height: 100vh;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: border-color 0.2s ease;
}

.card:hover { border-color: #333333; }

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 9999px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: -0.14px;
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
  border: 0;
}

.pill-outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}

.pill-outline:hover {
  border-color: var(--accent);
  background: var(--bg-inset);
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

.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.tag-get { background: #1a2e1a; color: #4ade80; border: 1px solid #2a4a2a; }

.method-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  min-width: 40px;
  text-align: center;
}

.method-get { background: #1a2e1a; color: #4ade80; }

.endpoint-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 6px;
  background: var(--bg-inset);
  border: 1px solid var(--border);
  transition: border-color 0.15s ease;
  text-decoration: none;
  color: inherit;
}

.endpoint-row:hover { border-color: #333333; }

.endpoint-path {
  font-size: 13px;
  color: var(--text);
  font-weight: 500;
}

.endpoint-desc {
  font-size: 12px;
  color: var(--text-muted);
  margin-left: auto;
  text-align: right;
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
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

.footer-link:hover { color: var(--accent); }

.icon-sm { width: 14px; height: 14px; }
.icon-md { width: 16px; height: 16px; }
.page-heading { font-size: clamp(28px, 5vw, 40px); }
.copyright { font-size: 11px; }
`
          }}
        />
      </head>
      <body>
        {/* Header */}
        <section class="px-6 py-12 md:py-16" style="border-bottom: 1px solid var(--border);">
          <div class="max-w-3xl mx-auto">
            <a href="/" class="footer-link mb-6 inline-flex">
              <i data-lucide="arrow-left" class="icon-sm"></i>
              Back
            </a>
            <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4">
              <div>
                <h1 class="heading-display page-heading">Operations</h1>
                <p class="mt-3 body-text max-w-lg">
                  Every endpoint available in the uvytunes API. All requests are GET.
                </p>
              </div>
              <button
                onclick="downloadDocs()"
                class="pill pill-outline inline-flex items-center gap-2 whitespace-nowrap"
              >
                <i data-lucide="download" class="icon-sm"></i>
                Save as JSON
              </button>
            </div>
          </div>
        </section>

        <main class="px-6 py-12 md:py-16">
          <div class="max-w-3xl mx-auto space-y-10">

            {/* Search */}
            <div>
              <div class="flex items-center gap-2 mb-4">
                <i data-lucide="search" class="icon-sm" style="color: var(--text-muted);"></i>
                <span class="section-title">Search</span>
                <span class="mono-label" style="margin-left: 4px;">5 endpoints</span>
              </div>
              <div class="card rounded-lg p-4 space-y-2">
                <a href="/api/search?query=tum" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/search</span>
                  <span class="endpoint-desc">Global search across all categories</span>
                </a>
                <a href="/api/search/songs?query=tum" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/search/songs</span>
                  <span class="endpoint-desc">Search songs</span>
                </a>
                <a href="/api/search/albums?query=aashiqui" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/search/albums</span>
                  <span class="endpoint-desc">Search albums</span>
                </a>
                <a href="/api/search/artists?query=arijit" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/search/artists</span>
                  <span class="endpoint-desc">Search artists</span>
                </a>
                <a href="/api/search/playlists?query=bollywood" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/search/playlists</span>
                  <span class="endpoint-desc">Search playlists</span>
                </a>
              </div>
            </div>

            {/* Songs */}
            <div>
              <div class="flex items-center gap-2 mb-4">
                <i data-lucide="music" class="icon-sm" style="color: var(--text-muted);"></i>
                <span class="section-title">Songs</span>
                <span class="mono-label" style="margin-left: 4px;">3 endpoints</span>
              </div>
              <div class="card rounded-lg p-4 space-y-2">
                <a href="/api/songs?ids=abc123" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/songs</span>
                  <span class="endpoint-desc">Get songs by IDs or link</span>
                </a>
                <a href="/api/songs/abc123" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/songs/:id</span>
                  <span class="endpoint-desc">Get a single song by ID</span>
                </a>
                <a href="/api/songs/abc123/suggestions" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/songs/:id/suggestions</span>
                  <span class="endpoint-desc">Get similar songs</span>
                </a>
              </div>
            </div>

            {/* Albums */}
            <div>
              <div class="flex items-center gap-2 mb-4">
                <i data-lucide="disc" class="icon-sm" style="color: var(--text-muted);"></i>
                <span class="section-title">Albums</span>
                <span class="mono-label" style="margin-left: 4px;">1 endpoint</span>
              </div>
              <div class="card rounded-lg p-4 space-y-2">
                <a href="/api/albums?id=abc123" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/albums</span>
                  <span class="endpoint-desc">Get album by ID or link</span>
                </a>
              </div>
            </div>

            {/* Artists */}
            <div>
              <div class="flex items-center gap-2 mb-4">
                <i data-lucide="mic-2" class="icon-sm" style="color: var(--text-muted);"></i>
                <span class="section-title">Artists</span>
                <span class="mono-label" style="margin-left: 4px;">4 endpoints</span>
              </div>
              <div class="card rounded-lg p-4 space-y-2">
                <a href="/api/artists?id=abc123" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/artists</span>
                  <span class="endpoint-desc">Get artist by ID or link</span>
                </a>
                <a href="/api/artists/abc123" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/artists/:id</span>
                  <span class="endpoint-desc">Get a single artist</span>
                </a>
                <a href="/api/artists/abc123/songs" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/artists/:id/songs</span>
                  <span class="endpoint-desc">Get artist songs</span>
                </a>
                <a href="/api/artists/abc123/albums" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/artists/:id/albums</span>
                  <span class="endpoint-desc">Get artist albums</span>
                </a>
              </div>
            </div>

            {/* Playlists */}
            <div>
              <div class="flex items-center gap-2 mb-4">
                <i data-lucide="list-music" class="icon-sm" style="color: var(--text-muted);"></i>
                <span class="section-title">Playlists</span>
                <span class="mono-label" style="margin-left: 4px;">1 endpoint</span>
              </div>
              <div class="card rounded-lg p-4 space-y-2">
                <a href="/api/playlists?id=abc123" class="endpoint-row" target="_blank">
                  <span class="method-badge method-get">GET</span>
                  <span class="endpoint-path">/api/playlists</span>
                  <span class="endpoint-desc">Get playlist by ID or link</span>
                </a>
              </div>
            </div>

            {/* Info */}
            <div class="card rounded-lg p-6">
              <div class="flex items-center gap-2 mb-3">
                <i data-lucide="info" class="icon-sm" style="color: var(--text-muted);"></i>
                <span class="section-title">Notes</span>
              </div>
              <div class="body-text space-y-2" style="font-size: 13px;">
                <p>All endpoints are <span class="tag tag-get">GET</span> — no authentication required.</p>
                <p>Query params like <code style="color: var(--text);">page</code>, <code style="color: var(--text);">limit</code>, <code style="color: var(--text);">sortBy</code>, and <code style="color: var(--text);">sortOrder</code> are available on most endpoints.</p>
                <p>Full interactive docs at <a href="/docs" style="color: var(--accent); text-decoration: underline;">/docs</a>.</p>
              </div>
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer class="px-6 py-8" style="border-top: 1px solid var(--border);">
          <div class="max-w-3xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div class="flex gap-6">
              <a href="/" class="footer-link">
                <i data-lucide="home" class="icon-sm"></i>
                Home
              </a>
              <a href="/docs" class="footer-link">
                <i data-lucide="book-open" class="icon-sm"></i>
                Docs
              </a>
              <a href="https://github.com/nikkexe0-del" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i data-lucide="github" class="icon-sm"></i>
                GitHub
              </a>
            </div>
            <span class="mono-label copyright flex items-center gap-2">
              <i data-lucide="music" class="icon-sm"></i>
              &copy; {new Date().getFullYear()} uvytunes API
            </span>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{ __html: `
          lucide.createIcons();
          function downloadDocs() {
            fetch('/api/docs/json')
              .then(function(r) { return r.json(); })
              .then(function(data) {
                var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'uvytunes-api-docs.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              });
          }
        ` }} />
      </body>
    </html>
  )
})
