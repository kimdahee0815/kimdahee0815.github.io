const code = 'CODE_YOU_GOT_FROM_URL_https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://localhost:3434&scope=user-read-currently-playing'

async function main() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' +
      btoa('SPOTIFY_CLIENT_ID' + ':' + 'SPOTIFY_CLIENT_SECRET'),
  },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: 'http://localhost:3435',
  }),
})

  const data = await res.json()
}

main()
