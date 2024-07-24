// API key
const API_KEY = '<YOUR_API_KEY>' // Get your API key here: https://app.fliki.ai/account/api

// API URL
const API_URL = 'https://api.fliki.ai/v1'

// generate (using template)
if (true) {
  // Data input
  const input = {
    fileId: '...',
    name: 'provide a file name or leave blank to auto-generate',
    webhook: 'https://example.com/webhook',
    scenes: [
      {
        key: 'intro',
        layers: [
          {
            key: 'voiceover',
            text: 'This is intro scene.',
          },
          {
            key: 'text',
            text: 'Intro',
          },
        ],
      },
      {
        key: 'body',
        layers: [
          {
            key: 'voiceover',
            text: 'This is body scene one.',
          },
          {
            key: 'text',
            text: 'One',
          },
        ],
      },
      {
        key: 'body',
        layers: [
          {
            key: 'voiceover',
            text: 'This is body scene two.',
          },
          {
            key: 'text',
            text: 'Two',
          },
        ],
      },
      {
        key: 'outro',
        layers: [
          {
            key: 'voiceover',
            text: 'This is outro scene.',
          },
          {
            key: 'text',
            text: 'Outro',
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

// delete file
if (false) {
  // Data input
  const input = {
    fileId: '...',
  }

  // API endpoint
  const response = await fetch(`${API_URL}/file/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(input),
  })

  console.log(await response.json())
}

