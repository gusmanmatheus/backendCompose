const express = require('express');
const bodyParser = require('body-parser');
class AppController {
  constructor() {
      this.express = express();
      this.middlewares();
  }

  middlewares(){
      this.express.use(express.json());
      this.express.use(bodyParser.json());
  
  }
}

module.exports = new AppController().express;