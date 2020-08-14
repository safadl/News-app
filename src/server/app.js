// const express= require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const mongoose= require('mongoose')
// require('./user')
// const user= mongoose.model("user")
// app.use(bodyParser.json())
// const mongoUri= "mongodb+srv://safadl:8TlRw4OlPzx8RyjJ@newscluster.zha4i.mongodb.net/<dbname>?retryWrites=true&w=majority"
// mongoose.connect(mongoUri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true

// })
// mongoose.connection.on("connected",()=>{
//     console.log("connected to mongo !")
// })
// mongoose.connection.on("error",(err)=>{
//     console.log("connection failed",err)
// })
// app.get('/',(req,res)=>{
//     res.send("welcome to node js")
// })
// app.post('/send',(req,res)=>{
// console.log(req.body)
// res.send("posted")
// })

// app.listenerCount(3000,()=>{
//     console.log("server running")
// })