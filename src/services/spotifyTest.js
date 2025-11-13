import { SpotifyData } from './spotify.js'

async function Test() {
  const token = await SpotifyData()
  console.log(token)
  try {
    const res = await fetch(
      'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

Test()
