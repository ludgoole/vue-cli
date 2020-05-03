const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = express()
const fs = require('fs')
const upload = multer({ dest: './tmp/' })
// 跨域请求
app.use(cors({
  credentials: true, // 允许携带cookie
  origin: ['http://localhost:8080', 'http://localhost:8888'], // 指定接收的地址
  methods: ['GET', 'POST'], // 指定接收的请求类型
  alloweHeaders: ['Content-Type', 'Authorization'] // 指定header
}))

// body解析
app.use(bodyParser.json()) // 解析 application/json
app.use(bodyParser.urlencoded()) // 解析 application/x-www-form-urlencoded

// router
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/list', (req, res) => {
  res.json({
    errCode: '000',
    data: {
      list: ['A', 'B', 'C', 'D']
    }
  })
})

app.post('/login', (req, res) => {
  console.log(req.body)
  res.json({
    errCode: '000',
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
    errCode: '000',
    data: {
      list: [1, 2, 3, 4]
    }
  })
})

app.post('/download', (req, res) => {
  console.log(req.body)
  // images/logo.png
  // images/test.xlsx
  res.set({
    'Content-Type': 'application/octet-stream',
    'Content-Disposition': 'attachment filename=' + 'test' + '.xlsx'
  })
  fs.createReadStream('images/logo.png').pipe(res)
})

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('upload:::', req.body)
  console.log('upload:::', req.file)
  res.json({
    errCode: '000',
    data: {
      filecode: 'filecode'
    }
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
