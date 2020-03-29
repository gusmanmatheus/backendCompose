const express = require('express');
const bodyParser = require('body-parser');
class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes()
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.json());
  }
  routes() {
    require('./routes/users')(this.express);
    require('./controllers/projectsControllers')(this.express);
    require('./routes/adsense')(this.express);
  }
}

module.exports = new AppController().express;