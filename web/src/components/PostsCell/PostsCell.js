import ClipLoader from 'react-spinners/ClipLoader'

export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      body
      link_url
      post_url
    }
  }
`

export const Loading = () => (
  <div className="py-4">
    <ClipLoader />
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  console.log(posts)
  return (
    <ul className="divide-y divide-gray-200">
      {posts.map((post) => (
        <li key={post.id} className="py-4" role="article">
          <header>
            <h2 className="text-xl font-semibold text-gray-900">
              <a
                href={post.link_url || post.post_url}
                target="_blank"
                rel="noreferrer"
              >
                {post.title}
              </a>
            </h2>
          </header>
          <p
            className="mt-3 text-base text-gray-500"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </li>
      ))}
    </ul>
  )
}
