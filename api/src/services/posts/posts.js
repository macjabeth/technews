import fetch from 'node-fetch'
import cheerio from 'cheerio'
import marked from 'marked'
import sanitizeHtml from 'sanitize-html'

const fetchMetaDescription = async (url) => {
  const res = await fetch(url)
  const text = await res.text()
  const $ = cheerio.load(text)
  return $('meta[name="description"]').attr('content')
}

const truncate = (text) =>
  text.length > 255 ? text.slice(0, 252) + '...' : text

const cleanPost = async (post) => {
  if (!post.body.startsWith('http')) {
    post.body = truncate(sanitizeHtml(marked(post.body)))
  } else {
    post.body = await fetchMetaDescription(post.link_url)
  }

  return post
}

export const posts = async () => {
  const response = await fetch(process.env.GRIZZLY_SERVER + '/subreddits/top')
  const data = await response.json()
  return data.sort((a, b) => b.score - a.score).map(await cleanPost)
}
