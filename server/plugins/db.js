module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/vue-node',{
    useNewUrlParser: true,
    useFindAndModify: false
  },(err)=> {
    if(err) {
      console.log('数据库链接失败')
      return
    }
    console.log('数据库链接成功')
  })


  require('require-all')(__dirname + '/../models')
}