const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()

// 跨域请求
app.use(cors({
    credentials: true,  // 允许携带cookie
    origin:['http://localhost:8888'],  // 指定接收的地址
    methods:['GET', 'POST'],  // 指定接收的请求类型
    alloweHeaders:['Content-Type', 'Authorization']  // 指定header
}))

// body解析
app.use(bodyParser.json());  // 解析 application/json
app.use(bodyParser.urlencoded());  // 解析 application/x-www-form-urlencoded


// router
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/login', (req, res) => {
    console.log(req.body)
    res.json({
        code: '000',
        data: {
            token: 'Hello World!',
            userInfo: {
                name: 'Ludgoole',
                level: 'v3'
            }
        }
    })
})

app.post('/menu', (req, res) => {
    console.log(req.body)
    res.json({
        code: '000',
        data: {
            list: [1,2,3,4]
        }
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))