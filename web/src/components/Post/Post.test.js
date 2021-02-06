import { render } from '@redwoodjs/testing'

import Post from './Post'

describe('Post', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Post />)
    }).not.toThrow()
  })
})
