import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="pb-5 border-b border-gray-200">
            <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Tech News
            </h3>
          </div>
          <PostsCell />
        </div>
      </div>
    </>
  )
}

export default HomePage
