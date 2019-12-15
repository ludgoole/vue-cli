import Mock from 'mockjs'
import {exportAll} from '../util'



const {
    login,
    menu,
} = exportAll(require.context('./data', false, /\.js$/));

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

// 登录模块
Mock.mock('/login', login)

// 菜单栏模块
Mock.mock('/menu', menu)


export default Mock