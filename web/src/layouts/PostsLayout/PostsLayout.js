const PostLayout = ({ children }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
              Tech News
            </h3>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default PostLayout
