import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Post from 'src/components/Post'

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

export const Loading = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return (
    <div className="py-4">
      <SkeletonTheme
        color={prefersDark ? '#6b7280' : '#757c89'}
        highlightColor={prefersDark ? '#f3f4f6' : '#111827'}
      >
        <Skeleton count={5} />
      </SkeletonTheme>
    </div>
  )
}

export const Empty = () => <div className="py-4">Empty</div>

export const Failure = ({ error }) => (
  <div className="py-4">Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}
