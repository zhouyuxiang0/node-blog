const getList = (author, keyword) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: '标题',
      content: 'c1',
      createTime: 12313131313,
      author: '张三'
    }, {
      id: 2,
      title: '标题2',
      content: 'c2',
      createTime: 12313131313,
      author: '张三'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题',
    content: 'c1',
    createTime: 12313131313,
    author: '张三'
  }
}

const newBlog = (blogData = {}) => {
  // blogData 博客对象包含 title content
  return {
    id: 3
  }
}

module.exports = {
  getList,
  getDetail,
  newBlog
}