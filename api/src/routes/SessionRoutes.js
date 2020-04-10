const routes = require('express').Router();
const sessionController = require("../controllers/SessionController");

routes.get("/",sessionController.login);
routes.post("/register",sessionController.register); 

module.exports = app => app.use('/session', routes);