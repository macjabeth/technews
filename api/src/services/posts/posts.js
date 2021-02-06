import fetch from 'node-fetch'
import { markdown } from 'markdown'

const sanitize = (text) => {
  let html = markdown.toHTML(text)
  if (html.length > 255) html = html.slice(0, 252) + '...'
  return html
}

const cleanBody = (post) => ({
  ...post,
  body: post.body.startsWith('http') ? null : sanitize(post.body),
})

export const posts = async () => {
  const response = await fetch(process.env.GRIZZLY_SERVER)
  const data = await response.json()
  return data.map(cleanBody)
}
