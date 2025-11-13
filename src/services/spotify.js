import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })
let time_count = 0
let token = null

export async function SpotifyData() {
  const url = 'https://accounts.spotify.com/api/token'

  if (token && Date.now() < time_count) {
    return token
  }

  try {
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_KEY,
      client_secret: process.env.SECRET_KEY,
    })
    console.log('CLIENT_KEY:', process.env.CLIENT_KEY)
    console.log('SECRET_KEY:', process.env.SECRET_KEY)

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body, // JANGAN di-JSON.stringify
    })

    const data = await res.json()
    const token = data.access_token
    time_count = Date.now() + data.expires_in * 1000
    return token
  } catch (err) {
    console.error(err)
  }
}
