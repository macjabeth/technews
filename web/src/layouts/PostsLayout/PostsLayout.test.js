import { render } from '@redwoodjs/testing'

import PostsLayout from './PostsLayout'

describe('PostsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostsLayout />)
    }).not.toThrow()
  })
})
