require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
module.exports = (req,res,next) => {
const jwt = require('jsonwebtoken');
const authHeader = req.headers.authorization;
  if(!authHeader){
    return res.status(401).send({error: 'token nao informado'});
  }
  const parts = authHeader.split(' ');
  if(!parts.length == 2 ){
    return res.status(401).send({error: 'token padrao errado'});
  }
  const [scheme,token] = parts;

  if(!/^Bearer$/i.test(scheme)){
    return res.status(401).send({error: 'token padrao errado'});
  }

  jwt.verify(token,process.env.APP_SECRET,(err,decoded) => {
    if(err) res.status(401).send({error: 'token invalido'});
    req.id = decoded.id;
     return next();
  })
};