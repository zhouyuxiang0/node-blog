const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json')
  
  const blogData = handleBlogRouter(req, res)
  if(blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return 
  }

  const userData = handleUserRouter(res, req)
  if(userData) {
    res.end(
      JSON.stringify(userData)
    )
  }
}

module.exports = serverHandle
// process.env.NODE_ENV