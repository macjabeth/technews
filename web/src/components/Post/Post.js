const Post = ({ post }) => {
  return (
    <li key={post.id} className="py-4" role="article">
      <header>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          <a
            href={post.link_url || post.post_url}
            target="_blank"
            rel="noreferrer"
          >
            {post.title}
          </a>
        </h2>
      </header>
      {post.body && (
        <p
          className="mt-3 text-base text-gray-500"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      )}
    </li>
  )
}

export default Post
