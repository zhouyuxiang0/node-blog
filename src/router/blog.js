const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModule')

const handleBlogRouter = (req, res) => {
  const method = req.method
  
  if(method === 'GET' && req.path === "/api/blog/list") {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  if(method === 'GET' && req.path === "/api/blog/detail") {
    const id = req.query.id
    const data = getDetail(id)
    return new SuccessModel(data)
  }
  
  if(method === 'POST' && req.path === "/api/blog/new") {
    return {
      msg: "新建博客接口"
    }
  }

  if(method === 'POST' && req.path === "/api/blog/update") {
    return {
      msg: "更新博客接口"
    }
  }

  if(method === 'POST' && req.path === "/api/blog/del") {
    return {
      msg: "删除博客接口"
    }
  }
}

module.exports = handleBlogRouter