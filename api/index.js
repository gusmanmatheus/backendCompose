const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')

const app = express();


var logStream  =  fs.createWriteStream(
    path.join(__dirname, 'http-servidor.log'),{flags: 'a'})
app.use(morgan("combined", {stream:logStream}));

// app.use(express.static(__dirname + '/'))

app.get("/", (req,res)=>{
res.send('hello, world!')
})

app.listen("3000", ()=>{
    console.log("Server is listening on port 3000")
})

