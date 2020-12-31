const express = require('express')
const app = express()
const port = 7000
const bodyParser = require('body-parser');
const {User} = require('./models/User'); 

// mongodb uri 주소 관리
const config = require('./config/key');

// application/x-www-form-urlencoded 형태로 넘어오면 분석할수 있게 변경해주는 역할
app.use(bodyParser.urlencoded({extended:true}));
// application/json 형태로 넘어오면 분석할 수 있게 해주는 혁할
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
//  밑에것들 추가로 선언해줘야 오류 안생김
useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('connect'))
.catch(err => console.log(err))
// 연결이 잘 되었다면(then) 실행
// 연길이 안되었다면(catch) 실행ddddddddddddddd

app.get('/', (req, res) => {
  res.send('Hello World!zzz')
})

app.post('/register',(req,res) => {

  // bodyparser 가 있어서 정보 받아오는게 가능
const user = new User(req.body)

// mongodb 에서 온 메소드 save()
user.save((err,userInfo)=>{
  if(err) return res.json({success:false , err})
  return res.status(200).json({success:true});
})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})