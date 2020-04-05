const connect = require('../db-connect/db');
const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require("../../configAuth/auth");
const { user } = require("../app/models")

class SessionController {
  async login(req, res) {

    const { email, password } = req.body
    if(email == undefined || password == undefined){
      return res.status(401).send({ message: "verifique seus dados" });

    }
     const userSearch = await user.findOne({ where: { 'email': email }, })
      if(!userSearch){
      return res.status(401).send({ message: "email ou senha incorreto" });
      }
    
    const findPassword = await userSearch.checkPassword(password);

    if (!(findPassword)) {
      return res.status(401).send({ message: "email ou senha incorreto" });
    }

    res.json({
      userSearch,
      token: userSearch.generateToken()
    });
  }


  async register(req, res) {
    const userReq = req.body
    if(userReq.email == undefined||
    userReq.birth_date == undefined||
    userReq.name == undefined||
    userReq.password == undefined||
    userReq.work == undefined){
      return res.status(401).send({ message: "verifique seus dados" });

    }
    const userSearch = await user.findOne({ where: { 'email': userReq.email }, })
    if (userSearch) {
      return res.status(401).send({ message: "Email já cadastrado" });
    }
    const resultInsert = await user.create({
      name: userReq.name,
      email: userReq.email,
      password: userReq.password,
      green_coins: "0",
      orange_coins: "0",
      birth_date: userReq.birth_date,
      work: userReq.work,
    })
    const userInsert = resultInsert.dataValues;
    userInsert.password = undefined
    userInsert.password_hash = undefined
    res.send({ user: userInsert, token: resultInsert.generateToken() })

  }

}

module.exports = new SessionController();