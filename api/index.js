const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
 const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(express.json());

require('./routes/users')(app);
require('./controllers/projectsControllers')(app);
require('./routes/adsense')(app);




app.listen("3000", ()=>{
console.log("Server is listening on port 3000")
})

var logStream  =  fs.createWriteStream(
    path.join(__dirname, 'http-servidor.log'),{flags: 'a'})
app.use(morgan("combined", {stream:logStream}));





// app.use(express.static(__dirname + '/'))