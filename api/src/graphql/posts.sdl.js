export const schema = gql`
  type Post {
    subreddit: String!
    title: String!
    id: String!
    score: Int!
    link_url: String!
    post_url: String!
    body: String
  }

  type Query {
    posts: [Post!]!
  }
`
