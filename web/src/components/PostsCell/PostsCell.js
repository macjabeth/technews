export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      body
    }
  }
`

export const Loading = () => <div className="mt-4">Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {posts.map((post) => (
        <li key={post.id} className="py-4">
          <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
          <p className="mt-3 text-base text-gray-500">{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
