const express = require("express")
const app = express()
require('dotenv').config()
require("./model/index")
//Require End Here

app.get('/',(req,res)=>{
    res.send("i am alive")
})
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server has started at port ${PORT}`)
})



