const app = require('./src/app')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')


app.listen(process.env.PORT || 3000);

var logStream = fs.createWriteStream(
    path.join(__dirname, 'http-servidor.log'), { flags: 'a' })
app.use(morgan("combined", { stream: logStream }));



require('./src/routes/users')(app);
require('./src/controllers/projectsControllers')(app);
require('./src/routes/adsense')(app);

// app.use(express.static(__dirname + '/'))