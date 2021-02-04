import fetch from 'node-fetch'
import { markdown } from 'markdown'

export const posts = async () => {
  const response = await fetch(process.env.GRIZZLY_SERVER)
  const data = await response.json()
  return data.map((post) => ({
    ...post,
    body: post.body.startsWith('http') ? '...' : markdown.toHTML(post.body),
  }))
}
