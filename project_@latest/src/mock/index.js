import Mock from 'mockjs' // 引入mockjs
import template from './template'
 
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
const date = template.getRandomList(Random, 10)
console.log(date)

let menuList = [
  {
    title: '宫殿',
    url: '/palace'
  },
  {
    title: '编码',
    url: '/encode'
  },
  {
    title: '练习',
    url: '/practice'
  },
  {
    title: '应用',
    url: '/apply'
  },
]
Mock.mock('/getMenu', 'post', menuList) // 根据数据模板生成模拟数据