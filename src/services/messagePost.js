export default async function messagePost(message) {
  try {
    const url = 'https://mindsetngedit.com/porto-api/api/message/add'
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
    data = await res.json()
    return data.success
  } catch (err) {
    console.error(err)
    return false
  }
}
