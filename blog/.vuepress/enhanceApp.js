// It is also possible to use asynchronous functions
export default ({
  Vue, // VuePress Vue constructor in use
  options, // Some options for attaching to the root instance
  router, // route instance of the current application
  siteData, // Site Metadata
  isServer // The current application configuration is in SSR or client-side rendering
}) => {
  router.beforeEach((to, from, next) => {
    // Solve routing of non-ASCII file names, prevent 404
    const decodedPath = decodeURIComponent(to.path)
    if (decodedPath !== to.path && !to.path.includes('/post/')) {
      next(Object.assign({}, to, {
        fullPath: decodeURIComponent(to.fullPath),
        path: decodedPath
      }))
    } else {
      next()
    }
  })
}