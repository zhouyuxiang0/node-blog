const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModule')
import {SuccessModel} from '../model/resModule'

const handleBlogRouter = (req, res) => {
  const method = req.method
  
  if(method === 'GET' && req.path === "/api/blog/list") {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    console.log(SuccessModel)
    // return new SuccessModel(listData)
  }

  if(method === 'GET' && req.path === "/api/blog/detail") {
    return {
      msg: "博客详情接口"
    }
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