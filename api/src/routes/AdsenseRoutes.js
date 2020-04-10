const routes = require('express').Router();
const adsenseController = require("../controllers/AdsenseControllers");
const middleware = require("../middlewares/auth")

routes.use(middleware);

routes.post("/register",adsenseController.register);
routes.get("/all",adsenseController.getAll);
routes.get("/ad/:idP",adsenseController.getOneForIdAd);
routes.get("/user/:idP",adsenseController.getOneForIdUser);


module.exports = app => app.use('/adsense', routes);