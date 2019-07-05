const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  banner: { type: String },
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attacks: { type: Number },
    survive: { type: Number }
  },
  skills: [{
    icon: {type: String},
    name: {type: String},
    delay: {type: String},
    cost: {type: String},
    description: {type: String},
    tips: {type: String}
  }],
  items1: [{type:mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  items2: [{type:mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  usageTips: {type: String},
  battleTips: {type: String},
  teamTips: {type: String},
  partners: [{
    hero: {type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
    description: {type: String}
  }],
  strategies: [{
    icon: {type: String},
    name: {type: String},
    play: {type: String},
    date: {type: String } //数据模型暂定  需修改
  }]
})

module.exports = mongoose.model('Hero', schema, 'heroes') 
// 第三个参数指定的是在数据库的集合名,默认是‘Hero’变小写加复数，由于不够智能，集合名只能变成heros所以手动添加集合名heroes，但category能变成categories