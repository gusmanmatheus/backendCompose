const routes = require('express').Router();
const sessionController = require("../controllers/SessionController");
const middleware = require("../middlewares/auth")
routes.get("/",sessionController.login);
routes.post("/register",sessionController.register);

// routes.use(middleware)

routes.post("/register",sessionController.register);
routes.get("/",sessionController.login);
module.exports = app => app.use('/session', routes);