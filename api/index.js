const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const routes = require('./routes/users')
const app = express();

app.use(express.json());
 app.use(routes);

app.listen("3000", ()=>{
    console.log("Server is listening on port 3000")
})

var logStream  =  fs.createWriteStream(
    path.join(__dirname, 'http-servidor.log'),{flags: 'a'})
app.use(morgan("combined", {stream:logStream}));





// app.use(express.static(__dirname + '/'))