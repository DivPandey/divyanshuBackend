require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/hello",(req,res) => {
    res.send("Hey Divyanshu wassup!!")
})

app.get("/login",(req,res)=>{
    res.send('<h1>Hello Please login to Divyanshu Pandey</h1>')
})

app.get("/youtube",(req,res)=>{
    res.send('<h2>Hello pls start your yt channel</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})