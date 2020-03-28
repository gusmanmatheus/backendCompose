module.exports = (req,res,next) => {
const jwt = require('jsonwebtoken');
const authConfig = require("../configAuth/auth");
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

  jwt.verify(token,authConfig.secret,(err,decoded) => {
    if(err) res.status(401).send({error: 'token invalido'});
    req.idPeople = decoded.id;
     return next();
  })
};