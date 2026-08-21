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
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <meta name="description" content={description} />
        <meta name="keywords" content="uvytunes, JioSaavn API, Music API, uvytunes API, Songs, Albums, Playlists" />
        <meta name="author" content="uvytunes" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={previewImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={previewImage} />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/nikkexe0-del/uvytunesapi/main/assets/favicon.ico"
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind */}
        <script src="https://cdn.tailwindcss.com" />

        {/* Custom Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --brand: #ff5e1f;
              --brand-hover: #ff7038;
              --brand-soft: #ff9650;
              --cream: #fffbf5;
              --ink: #262626;
              --ink-soft: #414040;
              --muted: #727272;
              --hairline: #f0f0f0;
              --canvas: #ffffff;
            }

            * {
              font-family: 'IBM Plex Mono', monospace;
            }

            body {
              background-color: var(--cream);
              background-image:
                radial-gradient(circle, #e0ddd8 1px, transparent 1px);
              background-size: 24px 24px;
              min-height: 100vh;
            }

            .hero {
              background: var(--brand);
              position: relative;
              overflow: hidden;
            }

            .hero::before {
              content: '';
              position: absolute;
              inset: 0;
              background-image:
                radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px);
              background-size: 28px 28px;
              pointer-events: none;
            }

            .hero::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
            }

            .card {
              border: 1px solid var(--hairline);
              transition: all 0.15s ease;
            }

            .card:hover {
              border-color: var(--brand);
              box-shadow: 0 2px 12px rgba(255, 94, 31, 0.06);
            }

            .pill-cta {
              background: var(--cream);
              color: var(--ink);
              border: 0;
              padding: 12px 28px;
              border-radius: 9999px;
              font-weight: 500;
              font-size: 16px;
              letter-spacing: -0.16px;
              line-height: 24px;
              cursor: pointer;
              transition: all 0.15s ease;
              text-decoration: none;
              display: inline-block;
            }

            .pill-cta:hover {
              background: var(--brand-hover);
              color: var(--cream);
            }

            .mono-label {
              font-family: 'IBM Plex Mono', monospace;
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: var(--muted);
            }

            .section-heading {
              font-weight: 500;
              letter-spacing: -1.4px;
              line-height: 1;
              color: var(--ink);
            }

            .body-text {
              font-weight: 400;
              letter-spacing: -0.04px;
              line-height: 1.5;
              color: var(--ink-soft);
            }

            .footer-link {
              color: var(--muted);
              text-decoration: none;
              transition: color 0.15s ease;
            }

            .footer-link:hover {
              color: var(--brand);
            }
            `
          }}
        />
      </head>
      <body class="min-h-screen flex flex-col">
        {/* Hero Section — brand voltage as canvas */}
        <section class="hero px-6 py-20 md:py-28 flex flex-col items-center text-center relative z-10">
          <div class="max-w-3xl mx-auto relative z-10">
            <span class="mono-label text-white/60 block mb-4">
              v0.1.0 / unofficial
            </span>
            <h1
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 'clamp(36px, 7vw, 56px)',
                fontWeight: 500,
                lineHeight: '1',
                letterSpacing: '-1.4px',
                color: 'var(--cream)',
              }}
            >
              uvytunes
            </h1>
            <p
              class="mt-5 max-w-lg mx-auto"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: 'rgba(255, 251, 245, 0.7)',
              }}
            >
              Unofficial JioSaavn API. Fast, reliable access to songs, albums, artists, and playlists.
            </p>
            <a href="/docs" class="pill-cta mt-8">
              Explore the Docs
            </a>
          </div>
        </section>

        {/* Below-fold — white canvas with hairline cards */}
        <main class="flex-1 px-6 py-16 md:py-24" style={{ background: 'var(--canvas)' }}>
          <div class="max-w-3xl mx-auto">
            {/* Quick Start Card */}
            <div class="card rounded-lg p-6 sm:p-8 mb-6" style={{ background: 'var(--canvas)' }}>
              <span class="mono-label block mb-3" style={{ color: 'var(--brand)' }}>
                Quick Start
              </span>
              <h2
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 'clamp(24px, 5vw, 32px)',
                  fontWeight: 500,
                  letterSpacing: '-0.8px',
                  lineHeight: '1.15',
                  color: 'var(--ink)',
                }}
              >
                Get started in seconds
              </h2>
              <p class="mt-3 body-text max-w-xl">
                Hit the API from any HTTP client. No auth, no keys — just search, fetch, and stream.
              </p>
              <div
                class="mt-5 rounded-md p-4 overflow-x-auto"
                style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--hairline)',
                }}
              >
                <code
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    color: 'var(--ink)',
                    lineHeight: '1.7',
                  }}
                >
                  GET /api/search/songs?query=tum+hi+ho
                </code>
              </div>
            </div>

            {/* Endpoints Card */}
            <div class="card rounded-lg p-6 sm:p-8 mb-6" style={{ background: 'var(--canvas)' }}>
              <span class="mono-label block mb-3" style={{ color: 'var(--brand)' }}>
                Endpoints
              </span>
              <h2
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 'clamp(24px, 5vw, 32px)',
                  fontWeight: 500,
                  letterSpacing: '-0.8px',
                  lineHeight: '1.15',
                  color: 'var(--ink)',
                }}
              >
                Every route you need
              </h2>
              <p class="mt-3 body-text max-w-xl">
                Search songs, albums, artists, and playlists. Get details by ID or link. Stream or download.
              </p>
              <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { method: 'GET', path: '/api/search/songs' },
                  { method: 'GET', path: '/api/search/albums' },
                  { method: 'GET', path: '/api/search/artists' },
                  { method: 'GET', path: '/api/search/playlists' },
                  { method: 'GET', path: '/api/songs/:id' },
                  { method: 'GET', path: '/api/albums/:id' },
                  { method: 'GET', path: '/api/artists/:id' },
                  { method: 'GET', path: '/api/playlists/:id' },
                ].map((ep) => (
                  <div
                    key={ep.path}
                    class="flex items-center gap-2 px-3 py-2 rounded-md"
                    style={{
                      background: 'var(--cream)',
                      border: '1px solid var(--hairline)',
                    }}
                  >
                    <span
                      class="mono-label text-xs"
                      style={{ color: 'var(--brand)', fontSize: '10px' }}
                    >
                      {ep.method}
                    </span>
                    <code
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        color: 'var(--ink-soft)',
                      }}
                    >
                      {ep.path}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Card */}
            <div class="card rounded-lg p-6 sm:p-8" style={{ background: 'var(--canvas)' }}>
              <span class="mono-label block mb-3" style={{ color: 'var(--brand)' }}>
                Built for developers
              </span>
              <h2
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 'clamp(24px, 5vw, 32px)',
                  fontWeight: 500,
                  letterSpacing: '-0.8px',
                  lineHeight: '1.15',
                  color: 'var(--ink)',
                }}
              >
                Why uvytunes
              </h2>
              <div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Fast',
                    desc: 'Optimized for low latency. Songs return in under 200ms.',
                  },
                  {
                    title: 'Open',
                    desc: 'No API keys. No rate limits. Fully open source.',
                  },
                  {
                    title: 'Reliable',
                    desc: 'Backed by JioSaavn. Streaming URLs with multiple quality tiers.',
                  },
                ].map((f) => (
                  <div key={f.title}>
                    <span
                      class="mono-label block mb-2"
                      style={{ color: 'var(--ink)', fontSize: '12px', fontWeight: 600 }}
                    >
                      {f.title}
                    </span>
                    <p class="body-text" style={{ fontSize: '13px' }}>
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          class="px-6 py-8 flex flex-col items-center text-center"
          style={{
            background: 'var(--canvas)',
            borderTop: '1px solid var(--hairline)',
          }}
        >
          <div class="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/docs" class="footer-link" style={{ fontSize: '13px' }}>
              Docs
            </a>
            <a href="https://github.com/nikkexe0-del" target="_blank" rel="noopener noreferrer" class="footer-link" style={{ fontSize: '13px' }}>
              GitHub
            </a>
            <a href="https://instagram.com/nikkk.exe" target="_blank" rel="noopener noreferrer" class="footer-link" style={{ fontSize: '13px' }}>
              Instagram
            </a>
          </div>
          <span class="mono-label" style={{ fontSize: '11px' }}>
            &copy; {new Date().getFullYear()} uvytunes. All rights reserved.
          </span>
        </footer>
      </body>
    </html>
  )
})
