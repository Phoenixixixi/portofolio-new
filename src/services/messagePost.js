export default async function messagePost(message) {
  try {
    const url = 'http://localhost:3005/api/message/add'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    if (!res.ok) {
      throw new Error()
    }
    console.log(await res.json())
  } catch (err) {
    console.error(err)
  }
}
