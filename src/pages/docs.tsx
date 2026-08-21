import { Hono } from 'hono'

export const Docs = new Hono()

Docs.get('/api/docs/json', (c) => {
  const base = 'https://uvytunesapi.vercel.app'

  const docs = {
    name: 'uvytunes API',
    version: '1.0.0',
    description: 'Unofficial JioSaavn API wrapper in TypeScript. Provides fast, reliable access to songs, albums, artists, and playlists.',
    baseUrl: base,
    source: 'https://github.com/nikkexe0-del/uvytunesapi',
    license: 'MIT',
    auth: 'None',
    rateLimit: 'No rate limit',
    endpoints: [
      {
        id: 1,
        title: 'Search for songs based on the provided query',
        method: 'GET',
        path: '/api/search/songs',
        category: 'Search',
        queryParameters: [
          { name: 'query', type: 'string', required: true, description: 'Search query for songs' },
          { name: 'page', type: 'number', required: false, description: 'The page number of the search results to retrieve', default: '0' },
          { name: 'limit', type: 'number', required: false, description: 'Number of search results per page', default: '10' }
        ],
        responses: [
          { status: 200, description: 'Successful response with song search results' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/search/songs?query=Believer`,
          shell: `curl '${base}/api/search/songs?query=Believer'`
        }
      },
      {
        id: 2,
        title: 'Search for albums based on the provided query',
        method: 'GET',
        path: '/api/search/albums',
        category: 'Search',
        queryParameters: [
          { name: 'query', type: 'string', required: true, description: 'Search query for albums' },
          { name: 'page', type: 'number', required: false, description: 'The page number of the search results to retrieve', default: '0' },
          { name: 'limit', type: 'number', required: false, description: 'Number of search results per page', default: '10' }
        ],
        responses: [
          { status: 200, description: 'Successful response with album search results' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/search/albums?query=Aashiqui`,
          shell: `curl '${base}/api/search/albums?query=Aashiqui'`
        }
      },
      {
        id: 3,
        title: 'Search for artists based on the provided query',
        method: 'GET',
        path: '/api/search/artists',
        category: 'Search',
        queryParameters: [
          { name: 'query', type: 'string', required: true, description: 'Search query for artists' },
          { name: 'page', type: 'number', required: false, description: 'The page number of the search results to retrieve', default: '0' },
          { name: 'limit', type: 'number', required: false, description: 'Number of search results per page', default: '10' }
        ],
        responses: [
          { status: 200, description: 'Successful response with artist search results' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/search/artists?query=Arijit+Singh`,
          shell: `curl '${base}/api/search/artists?query=Arijit+Singh'`
        }
      },
      {
        id: 4,
        title: 'Search for playlists based on the provided query',
        method: 'GET',
        path: '/api/search/playlists',
        category: 'Search',
        queryParameters: [
          { name: 'query', type: 'string', required: true, description: 'Search query for playlists' },
          { name: 'page', type: 'number', required: false, description: 'The page number of the search results to retrieve', default: '0' },
          { name: 'limit', type: 'number', required: false, description: 'Number of search results per page', default: '10' }
        ],
        responses: [
          { status: 200, description: 'Successful response with playlist search results' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/search/playlists?query=Bollywood+Top`,
          shell: `curl '${base}/api/search/playlists?query=Bollywood+Top'`
        }
      },
      {
        id: 5,
        title: 'Search across all categories (songs, albums, artists, playlists)',
        method: 'GET',
        path: '/api/search',
        category: 'Search',
        queryParameters: [
          { name: 'query', type: 'string', required: true, description: 'Search query string' }
        ],
        responses: [
          { status: 200, description: 'Successful response with combined search results across all categories' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/search?query=Tum+Hi+Ho`,
          shell: `curl '${base}/api/search?query=Tum+Hi+Ho'`
        }
      },
      {
        id: 6,
        title: 'Get songs by a comma-separated list of IDs or by a JioSaavn link',
        method: 'GET',
        path: '/api/songs',
        category: 'Songs',
        queryParameters: [
          { name: 'ids', type: 'string', required: false, description: 'Comma-separated list of song IDs' },
          { name: 'link', type: 'string', required: false, description: 'Direct JioSaavn song URL' }
        ],
        responses: [
          { status: 200, description: 'Successful response with song details' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/songs?ids=aRZbUYD7`,
          shell: `curl '${base}/api/songs?ids=aRZbUYD7'`
        }
      },
      {
        id: 7,
        title: 'Get a single song by its ID',
        method: 'GET',
        path: '/api/songs/:id',
        category: 'Songs',
        pathParameters: [
          { name: 'id', type: 'string', required: true, description: 'The song ID' }
        ],
        responses: [
          { status: 200, description: 'Successful response with song details' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/songs/aRZbUYD7`,
          shell: `curl '${base}/api/songs/aRZbUYD7'`
        }
      },
      {
        id: 8,
        title: 'Get song suggestions for infinite playback',
        method: 'GET',
        path: '/api/songs/:id/suggestions',
        category: 'Songs',
        pathParameters: [
          { name: 'id', type: 'string', required: true, description: 'The song ID' }
        ],
        queryParameters: [
          { name: 'limit', type: 'number', required: false, description: 'Number of suggestions to return', default: '10' }
        ],
        responses: [
          { status: 200, description: 'Successful response with list of similar songs' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/songs/aRZbUYD7/suggestions?limit=5`,
          shell: `curl '${base}/api/songs/aRZbUYD7/suggestions?limit=5'`
        }
      },
      {
        id: 9,
        title: 'Get album details by ID or JioSaavn link',
        method: 'GET',
        path: '/api/albums',
        category: 'Albums',
        queryParameters: [
          { name: 'id', type: 'string', required: false, description: 'The album ID' },
          { name: 'link', type: 'string', required: false, description: 'Direct JioSaavn album URL' }
        ],
        responses: [
          { status: 200, description: 'Successful response with album details and track list' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/albums?id=1139549`,
          shell: `curl '${base}/api/albums?id=1139549'`
        }
      },
      {
        id: 10,
        title: 'Get artist details by ID or JioSaavn link',
        method: 'GET',
        path: '/api/artists',
        category: 'Artists',
        queryParameters: [
          { name: 'id', type: 'string', required: false, description: 'The artist ID' },
          { name: 'link', type: 'string', required: false, description: 'Direct JioSaavn artist URL' },
          { name: 'page', type: 'number', required: false, description: 'The page number to retrieve', default: '0' },
          { name: 'songCount', type: 'number', required: false, description: 'Number of songs to include', default: '10' },
          { name: 'albumCount', type: 'number', required: false, description: 'Number of albums to include', default: '10' },
          { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical' },
          { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc' }
        ],
        responses: [
          { status: 200, description: 'Successful response with artist details, songs, and albums' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/artists?id=459320&songCount=5`,
          shell: `curl '${base}/api/artists?id=459320&songCount=5'`
        }
      },
      {
        id: 11,
        title: 'Get a single artist by ID with full profile',
        method: 'GET',
        path: '/api/artists/:id',
        category: 'Artists',
        pathParameters: [
          { name: 'id', type: 'string', required: true, description: 'The artist ID' }
        ],
        queryParameters: [
          { name: 'page', type: 'number', required: false, description: 'The page number to retrieve', default: '0' },
          { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical' },
          { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc' }
        ],
        responses: [
          { status: 200, description: 'Successful response with artist profile and discography' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/artists/459320`,
          shell: `curl '${base}/api/artists/459320'`
        }
      },
      {
        id: 12,
        title: 'Get paginated, sortable list of songs for an artist',
        method: 'GET',
        path: '/api/artists/:id/songs',
        category: 'Artists',
        pathParameters: [
          { name: 'id', type: 'string', required: true, description: 'The artist ID' }
        ],
        queryParameters: [
          { name: 'page', type: 'number', required: false, description: 'The page number to retrieve', default: '0' },
          { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical' },
          { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc' }
        ],
        responses: [
          { status: 200, description: 'Successful response with paginated artist songs' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/artists/459320/songs?page=0&sortBy=popularity`,
          shell: `curl '${base}/api/artists/459320/songs?page=0&sortBy=popularity'`
        }
      },
      {
        id: 13,
        title: 'Get paginated, sortable list of albums for an artist',
        method: 'GET',
        path: '/api/artists/:id/albums',
        category: 'Artists',
        pathParameters: [
          { name: 'id', type: 'string', required: true, description: 'The artist ID' }
        ],
        queryParameters: [
          { name: 'page', type: 'number', required: false, description: 'The page number to retrieve', default: '0' },
          { name: 'sortBy', type: 'string', required: false, description: 'Sort by: popularity, latest, alphabetical' },
          { name: 'sortOrder', type: 'string', required: false, description: 'Sort order: asc, desc' }
        ],
        responses: [
          { status: 200, description: 'Successful response with paginated artist albums' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/artists/459320/albums?page=0&sortBy=latest`,
          shell: `curl '${base}/api/artists/459320/albums?page=0&sortBy=latest'`
        }
      },
      {
        id: 14,
        title: 'Get playlist details by ID or JioSaavn link',
        method: 'GET',
        path: '/api/playlists',
        category: 'Playlists',
        queryParameters: [
          { name: 'id', type: 'string', required: false, description: 'The playlist ID' },
          { name: 'link', type: 'string', required: false, description: 'Direct JioSaavn playlist URL' },
          { name: 'page', type: 'number', required: false, description: 'The page number of tracks to retrieve', default: '0' },
          { name: 'limit', type: 'number', required: false, description: 'Number of tracks per page', default: '10' }
        ],
        responses: [
          { status: 200, description: 'Successful response with playlist details and track list' }
        ],
        requestExample: {
          method: 'GET',
          url: `${base}/api/playlists?id=playlist_001&limit=5`,
          shell: `curl '${base}/api/playlists?id=playlist_001&limit=5'`
        }
      }
    ]
  }

  return c.json(docs)
})
