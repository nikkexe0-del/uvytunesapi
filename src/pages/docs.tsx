import { Hono } from 'hono'

export const Docs = new Hono()

Docs.get('/api/docs/json', (c) => {
  const docs = {
    name: 'uvytunes API',
    version: '1.0.0',
    description: 'Unofficial JioSaavn API wrapper in TypeScript. Provides fast, reliable access to songs, albums, artists, and playlists.',
    baseUrl: 'https://uvytunesapi.vercel.app',
    source: 'https://github.com/nikkexe0-del/uvytunesapi',
    license: 'MIT',
    auth: 'None — all endpoints are public, no API key required.',
    rateLimit: 'No rate limit.',
    searchParams: {
      page: 'Page number for pagination (0-indexed). Default: 0.',
      limit: 'Number of results per page. Default: 10.',
      sortBy: 'Sort order field. Options: popularity, latest, alphabetical.',
      sortOrder: 'Sort direction. Options: asc, desc.'
    },
    responseFormat: {
      success: 'boolean — true if the request succeeded.',
      data: 'object | array — the response payload.',
      error: 'string — error message (only on failure).'
    },
    categories: [
      {
        name: 'Search',
        icon: 'search',
        description: 'Search for songs, albums, artists, and playlists across JioSaavn.',
        endpoints: [
          {
            method: 'GET',
            path: '/api/search',
            title: 'Global Search',
            description: 'Search across all categories (songs, albums, artists, playlists) in a single request. Returns a combined result set.',
            params: [
              { name: 'query', type: 'string', required: true, description: 'The search query string.' }
            ],
            example: {
              request: 'GET /api/search?query=tum+hi+ho',
              curl: 'curl "https://uvytunesapi.vercel.app/api/search?query=tum%20hi%20ho"',
              response: {
                success: true,
                data: {
                  songs: { total: 100, results: ['...'] },
                  albums: { total: 20, results: ['...'] },
                  artists: { total: 15, results: ['...'] },
                  playlists: { total: 10, results: ['...'] }
                }
              }
            }
          },
          {
            method: 'GET',
            path: '/api/search/songs',
            title: 'Search Songs',
            description: 'Search for songs by name. Returns matching songs with metadata, artist info, and download URLs.',
            params: [
              { name: 'query', type: 'string', required: true, description: 'Song name or lyrics to search for.' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'limit', type: 'number', required: false, description: 'Results per page. Default: 10.' }
            ],
            example: {
              request: 'GET /api/search/songs?query=tum+hi+ho&page=0&limit=5',
              curl: 'curl "https://uvytunesapi.vercel.app/api/search/songs?query=tum%20hi%20ho&limit=5"',
              response: {
                success: true,
                data: {
                  total: 177752,
                  start: 0,
                  results: [
                    {
                      id: 'aRZbUYD7',
                      name: 'Tum Hi Ho',
                      type: 'song',
                      year: '2013',
                      duration: 262,
                      label: 'T-Series',
                      language: 'hindi',
                      hasLyrics: true,
                      album: { id: '1139549', name: 'Aashiqui 2' },
                      artists: { primary: [{ id: '702592', name: 'Mithoon' }, { id: '459320', name: 'Arijit Singh' }] },
                      image: [{ quality: '50x50', url: '...' }, { quality: '500x500', url: '...' }],
                      downloadUrl: [{ quality: '12kbps', url: '...' }, { quality: '320kbps', url: '...' }]
                    }
                  ]
                }
              }
            }
          },
          {
            method: 'GET',
            path: '/api/search/albums',
            title: 'Search Albums',
            description: 'Search for albums by name. Returns album metadata including artist info and song count.',
            params: [
              { name: 'query', type: 'string', required: true, description: 'Album name to search for.' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'limit', type: 'number', required: false, description: 'Results per page. Default: 10.' }
            ],
            example: {
              request: 'GET /api/search/albums?query=aashiqui',
              curl: 'curl "https://uvytunesapi.vercel.app/api/search/albums?query=aashiqui"',
              response: {
                success: true,
                data: {
                  total: 20,
                  start: 0,
                  results: [
                    {
                      id: '1139549',
                      name: 'Aashiqui 2',
                      type: 'album',
                      year: '2013',
                      songCount: 19,
                      language: 'hindi',
                      artists: [{ id: '459320', name: 'Arijit Singh' }],
                      image: [{ quality: '500x500', url: '...' }]
                    }
                  ]
                }
              }
            }
          },
          {
            method: 'GET',
            path: '/api/search/artists',
            title: 'Search Artists',
            description: 'Search for artists by name. Returns artist profiles with follower counts and top songs.',
            params: [
              { name: 'query', type: 'string', required: true, description: 'Artist name to search for.' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'limit', type: 'number', required: false, description: 'Results per page. Default: 10.' }
            ],
            example: {
              request: 'GET /api/search/artists?query=arijit+singh',
              curl: 'curl "https://uvytunesapi.vercel.app/api/search/artists?query=arijit%20singh"',
              response: {
                success: true,
                data: {
                  total: 5,
                  start: 0,
                  results: [
                    {
                      id: '459320',
                      name: 'Arijit Singh',
                      type: 'artist',
                      followerCount: 5000000,
                      image: [{ quality: '500x500', url: '...' }]
                    }
                  ]
                }
              }
            }
          },
          {
            method: 'GET',
            path: '/api/search/playlists',
            title: 'Search Playlists',
            description: 'Search for playlists by name. Returns playlist metadata with song counts and creators.',
            params: [
              { name: 'query', type: 'string', required: true, description: 'Playlist name to search for.' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'limit', type: 'number', required: false, description: 'Results per page. Default: 10.' }
            ],
            example: {
              request: 'GET /api/search/playlists?query=bollywood+top',
              curl: 'curl "https://uvytunesapi.vercel.app/api/search/playlists?query=bollywood%20top"',
              response: {
                success: true,
                data: {
                  total: 10,
                  start: 0,
                  results: [
                    {
                      id: 'playlist_001',
                      name: 'Bollywood Top 50',
                      type: 'playlist',
                      songCount: 50,
                      followerCount: 100000,
                      image: [{ quality: '500x500', url: '...' }]
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      {
        name: 'Songs',
        icon: 'music',
        description: 'Get detailed song information, stream URLs, and similar song suggestions.',
        endpoints: [
          {
            method: 'GET',
            path: '/api/songs',
            title: 'Get Songs by IDs or Link',
            description: 'Retrieve one or more songs by providing a comma-separated list of IDs, or a direct JioSaavn song URL via the link parameter. At least one of ids or link is required.',
            params: [
              { name: 'ids', type: 'string', required: false, description: 'Comma-separated song IDs (e.g. "abc123,def456").' },
              { name: 'link', type: 'string', required: false, description: 'A direct JioSaavn song URL (e.g. "https://www.jiosaavn.com/song/tum-hi-ho/...").' }
            ],
            example: {
              request: 'GET /api/songs?ids=aRZbUYD7',
              curl: 'curl "https://uvytunesapi.vercel.app/api/songs?ids=aRZbUYD7"',
              response: {
                success: true,
                data: [
                  {
                    id: 'aRZbUYD7',
                    name: 'Tum Hi Ho',
                    type: 'song',
                    year: '2013',
                    duration: 262,
                    label: 'T-Series',
                    language: 'hindi',
                    hasLyrics: true,
                    album: { id: '1139549', name: 'Aashiqui 2' },
                    artists: {
                      primary: [{ id: '702592', name: 'Mithoon' }, { id: '459320', name: 'Arijit Singh' }],
                      featured: [],
                      all: [{ id: '702592', name: 'Mithoon', role: 'music' }, { id: '459320', name: 'Arijit Singh', role: 'singer' }]
                    },
                    image: [{ quality: '50x50', url: '...' }, { quality: '150x150', url: '...' }, { quality: '500x500', url: '...' }],
                    downloadUrl: [{ quality: '12kbps', url: '...' }, { quality: '48kbps', url: '...' }, { quality: '96kbps', url: '...' }, { quality: '160kbps', url: '...' }, { quality: '320kbps', url: '...' }]
                  }
                ]
              }
            }
          },
          {
            method: 'GET',
            path: '/api/songs/:id',
            title: 'Get Song by ID',
            description: 'Retrieve a single song by its unique ID. Returns full song metadata including artists, album, download URLs in multiple quality tiers, and lyrics availability.',
            params: [
              { name: 'id', type: 'string', required: true, description: 'The song ID (path parameter).' }
            ],
            example: {
              request: 'GET /api/songs/aRZbUYD7',
              curl: 'curl "https://uvytunesapi.vercel.app/api/songs/aRZbUYD7"',
              response: {
                success: true,
                data: {
                  id: 'aRZbUYD7',
                  name: 'Tum Hi Ho',
                  type: 'song',
                  year: '2013',
                  releaseDate: null,
                  duration: 262,
                  label: 'T-Series',
                  explicitContent: false,
                  playCount: 370747963,
                  language: 'hindi',
                  hasLyrics: true,
                  url: 'https://www.jiosaavn.com/song/tum-hi-ho/EToxUyFpcwQ',
                  album: { id: '1139549', name: 'Aashiqui 2' },
                  artists: {
                    primary: [{ id: '702592', name: 'Mithoon' }, { id: '459320', name: 'Arijit Singh' }]
                  },
                  image: [{ quality: '500x500', url: '...' }],
                  downloadUrl: [{ quality: '320kbps', url: 'https://aac.saavncdn.com/..._320.mp4' }]
                }
              }
            }
          },
          {
            method: 'GET',
            path: '/api/songs/:id/suggestions',
            title: 'Get Song Suggestions',
            description: 'Get a list of similar songs for infinite playback or recommendation. Useful for building autoplay or "related tracks" features.',
            params: [
              { name: 'id', type: 'string', required: true, description: 'The song ID (path parameter).' },
              { name: 'limit', type: 'number', required: false, description: 'Number of suggestions to return. Default: 10.' }
            ],
            example: {
              request: 'GET /api/songs/aRZbUYD7/suggestions?limit=5',
              curl: 'curl "https://uvytunesapi.vercel.app/api/songs/aRZbUYD7/suggestions?limit=5"',
              response: {
                success: true,
                data: [
                  {
                    id: 'Bt07_OpM',
                    name: 'Tum Hi Ho (From "Aashiqui 2")',
                    type: 'song',
                    year: '2025',
                    duration: 261,
                    album: { id: '70314193', name: 'Best Of Arijit Singh' },
                    artists: { primary: [{ id: '459320', name: 'Arijit Singh' }] },
                    downloadUrl: [{ quality: '320kbps', url: '...' }]
                  }
                ]
              }
            }
          }
        ]
      },
      {
        name: 'Albums',
        icon: 'disc',
        description: 'Get album details including track lists, artist info, and release metadata.',
        endpoints: [
          {
            method: 'GET',
            path: '/api/albums',
            title: 'Get Album by ID or Link',
            description: 'Retrieve album details by providing either an album ID or a direct JioSaavn album URL. Returns album metadata, track list, and artist information.',
            params: [
              { name: 'id', type: 'string', required: false, description: 'The album ID.' },
              { name: 'link', type: 'string', required: false, description: 'A direct JioSaavn album URL.' }
            ],
            example: {
              request: 'GET /api/albums?id=1139549',
              curl: 'curl "https://uvytunesapi.vercel.app/api/albums?id=1139549"',
              response: {
                success: true,
                data: {
                  id: '1139549',
                  name: 'Aashiqui 2',
                  type: 'album',
                  year: '2013',
                  language: 'hindi',
                  songCount: 19,
                  artistCount: 10,
                  label: 'T-Series',
                  artists: [{ id: '459320', name: 'Arijit Singh' }],
                  image: [{ quality: '500x500', url: '...' }],
                  songs: [
                    { id: 'aRZbUYD7', name: 'Tum Hi Ho', duration: 262 }
                  ]
                }
              }
            }
          }
        ]
      },
      {
        name: 'Artists',
        icon: 'mic-2',
        description: 'Get artist profiles, discographies, and top songs with pagination and sorting.',
        endpoints: [
          {
            method: 'GET',
            path: '/api/artists',
            title: 'Get Artist by ID or Link',
            description: 'Retrieve artist details by ID or JioSaavn URL. Supports pagination and sorting of the artist\'s songs and albums.',
            params: [
              { name: 'id', type: 'string', required: false, description: 'The artist ID.' },
              { name: 'link', type: 'string', required: false, description: 'A direct JioSaavn artist URL.' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'songCount', type: 'number', required: false, description: 'Number of songs to include. Default: 10.' },
              { name: 'albumCount', type: 'number', required: false, description: 'Number of albums to include. Default: 10.' },
              { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical.' },
              { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc.' }
            ],
            example: {
              request: 'GET /api/artists?id=459320&songCount=5',
              curl: 'curl "https://uvytunesapi.vercel.app/api/artists?id=459320&songCount=5"',
              response: {
                success: true,
                data: {
                  id: '459320',
                  name: 'Arijit Singh',
                  type: 'artist',
                  followerCount: 5000000,
                  image: [{ quality: '500x500', url: '...' }],
                  songs: [
                    { id: 'aRZbUYD7', name: 'Tum Hi Ho', duration: 262 }
                  ],
                  albums: [
                    { id: '1139549', name: 'Aashiqui 2' }
                  ]
                }
              }
            }
          },
          {
            method: 'GET',
            path: '/api/artists/:id',
            title: 'Get Artist by ID',
            description: 'Retrieve a single artist by ID with full profile and paginated discography.',
            params: [
              { name: 'id', type: 'string', required: true, description: 'The artist ID (path parameter).' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical.' },
              { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc.' }
            ],
            example: {
              request: 'GET /api/artists/459320',
              curl: 'curl "https://uvytunesapi.vercel.app/api/artists/459320"',
              response: {
                success: true,
                data: {
                  id: '459320',
                  name: 'Arijit Singh',
                  type: 'artist',
                  followerCount: 5000000,
                  image: [{ quality: '500x500', url: '...' }],
                  topSongs: [],
                  topAlbums: []
                }
              }
            }
          },
          {
            method: 'GET',
            path: '/api/artists/:id/songs',
            title: 'Get Artist Songs',
            description: 'Get a paginated, sortable list of songs by an artist. Supports sorting by popularity, release date, or alphabetical order.',
            params: [
              { name: 'id', type: 'string', required: true, description: 'The artist ID (path parameter).' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical.' },
              { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc.' }
            ],
            example: {
              request: 'GET /api/artists/459320/songs?page=0&sortBy=popularity',
              curl: 'curl "https://uvytunesapi.vercel.app/api/artists/459320/songs?sortBy=popularity"',
              response: {
                success: true,
                data: [
                  {
                    id: 'aRZbUYD7',
                    name: 'Tum Hi Ho',
                    type: 'song',
                    year: '2013',
                    duration: 262,
                    playCount: 370747963,
                    downloadUrl: [{ quality: '320kbps', url: '...' }]
                  }
                ]
              }
            }
          },
          {
            method: 'GET',
            path: '/api/artists/:id/albums',
            title: 'Get Artist Albums',
            description: 'Get a paginated, sortable list of albums by an artist.',
            params: [
              { name: 'id', type: 'string', required: true, description: 'The artist ID (path parameter).' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical.' },
              { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc.' }
            ],
            example: {
              request: 'GET /api/artists/459320/albums?page=0&sortBy=latest',
              curl: 'curl "https://uvytunesapi.vercel.app/api/artists/459320/albums?sortBy=latest"',
              response: {
                success: true,
                data: [
                  {
                    id: '1139549',
                    name: 'Aashiqui 2',
                    type: 'album',
                    year: '2013',
                    songCount: 19,
                    image: [{ quality: '500x500', url: '...' }]
                  }
                ]
              }
            }
          }
        ]
      },
      {
        name: 'Playlists',
        icon: 'list-music',
        description: 'Get playlist details, track lists, and follower counts.',
        endpoints: [
          {
            method: 'GET',
            path: '/api/playlists',
            title: 'Get Playlist by ID or Link',
            description: 'Retrieve playlist details by ID or JioSaavn URL. Returns playlist metadata with paginated track list.',
            params: [
              { name: 'id', type: 'string', required: false, description: 'The playlist ID.' },
              { name: 'link', type: 'string', required: false, description: 'A direct JioSaavn playlist URL.' },
              { name: 'page', type: 'number', required: false, description: 'Page number (0-indexed). Default: 0.' },
              { name: 'limit', type: 'number', required: false, description: 'Number of tracks per page. Default: 10.' }
            ],
            example: {
              request: 'GET /api/playlists?id=playlist_001&limit=5',
              curl: 'curl "https://uvytunesapi.vercel.app/api/playlists?id=playlist_001&limit=5"',
              response: {
                success: true,
                data: {
                  id: 'playlist_001',
                  name: 'Bollywood Top 50',
                  type: 'playlist',
                  songCount: 50,
                  followerCount: 100000,
                  image: [{ quality: '500x500', url: '...' }],
                  songs: [
                    { id: 'aRZbUYD7', name: 'Tum Hi Ho', duration: 262 }
                  ]
                }
              }
            }
          }
        ]
      }
    ]
  }

  return c.json(docs)
})
