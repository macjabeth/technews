import fetch from 'node-fetch'

export const posts = async () => {
  const response = await fetch(process.env.GRIZZLY_SERVER)
  const data = await response.json()
  return data
}
