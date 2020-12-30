const express = require('express')
const app = express()
const port = 7000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://201230:zxchjk12@mdb.7abqt.mongodb.net/<dbname>?retryWrites=true&w=majority',{
//  밑에것들 추가로 선언해줘야 오류 안생김
useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('connect'))
.catch(err => console.log(err))
// 연결이 잘 되었다면(then) 실행
// 연길이 안되었다면(catch) 실행ddddddddddddddd

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})