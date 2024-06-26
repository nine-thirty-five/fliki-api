// API key
const API_KEY = '<YOUR_API_KEY>' // Get your API key here: https://app.fliki.ai/account/api

// API URL
const API_URL = 'https://api.fliki.ai/v1'

// generate template
if (true) {
  // Data input
  const input = {
    fileId: '...',
    webhook: 'https://example.com/webhook',
    scenes: [
      {
        key: 'intro',
        layers: [
          {
            key: 'voiceover',
            text: 'Welcome to the video.',
          },
        ],
      },
      {
        key: 'outro',
        layers: [
          {
            key: 'voiceover',
            text: 'Thanks for watching.',
          },
        ],
      },
    ],
  }

  // API endpoint
  const response = await fetch(`${API_URL}/generate/template`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(input),
  })

  console.log(await response.json()) // { fileId: "..." }
}

// generate status
if (false) {
  // Data input
  const input = new URLSearchParams({
    fileId: '...',
  })

  // API endpoint
  const response = await fetch(`${API_URL}/generate/status?${input}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    params: input,
  })

  console.log(await response.json()) // { fileId: "...", status: '...', download: "https://..." }
}
