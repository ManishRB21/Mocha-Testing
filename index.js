const express = require('express')
const app = express()
const users = require('./routes/users')

app.use('/',users)

module.exports=app.listen(3000, (req,res)=>{
    console.log("running 3000")
})