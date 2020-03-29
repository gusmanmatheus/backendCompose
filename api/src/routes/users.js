const routes = require('express').Router();
const connect = require('../db-connect/db');
const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require("../../configAuth/auth")

routes.get('/', async (req, res) => {
  const user = req.body
  const queryString = `SELECT * FROM People WHERE email = '${user.email}'`

  console.log(queryString)
  await connect.query(queryString, async (err, rows, fields) => {

    if (err) {
      console.log("Failed to query for Peoples", err)
      res.erroJson("usuario nao cadastrado", res)
      res.end()
      return
    }
    try {
      const hash = rows[0]
      console.log("bb", hash.password, user.password, "aaaaaa")
      console.log(` hashPassword = ${hash.password} \n senha = ${user.password}`)

      if (! await bcypt.compare(user.password, hash.password)) {
        res.erroJson("senha ou email errado")
      }

      console.log(` hashPassword = ${hash.password}  \n senha = ${user.password}`)
      hash.password = undefined
      const id = hash.idPeople
      hash.idPeople = undefined
      res.send({ user: hash, token: generaterToken({ id: id }) })
      res.end()
    } catch (err) {
      erroJson("nenhum usuario encontrado", res)
    }
  })
})

routes.post('/register', async (req, res) => {
  const user = req.body
  // user.password = bcypt.
  user.orange_coins = "0"
  user.green_coins = "0"
   const queryString2 = `SELECT email FROM People where email = '${user.email}'`
  try {
    await connect.query(queryString2, function (err, result, fields) {
      const hasEmail = JSON.stringify(result[0])
      if (hasEmail != undefined) {
        erroJson("email ja esta em uso", res)
      } else {

        insertUserInDatabase(user, res, req)
      }
    }
    );
  }
  catch (err) {
    console.log(err)
  }
})



async function insertUserInDatabase(user, res, req) {
  user.password = await bcypt.hash(user.password, 10);
  const queryString = `INSERT INTO People VALUES ('','${0}', '${0}', '${user.name}', '${user.birth_date}', '${user.work}', '${user.email}', '${user.password}')`
  await connect.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for Peoples", err)
      erroJson("algum erro aconteceu :(")
      res.end()
      return
    }
    if (rows.insertId != null || rows.insertId != 0) {
      //  res.send({user:rows, token: generaterToken({id: rows.insertId.idPeople})})
      user.password = undefined
      res.send({ user: user, token: generaterToken({id: rows.insertId }) })
    }
    console.log("success")
    res.end()

  })
}

//Utils
function generaterToken(param = {}) {
  return jwt.sign(param, authConfig.secret, {
    expiresIn: 86400
  });
}

function erroJson(message, res) {
  const jsonErro = {
    message: message
  }
  res.status(400).send(jsonErro)
  res.end()
}



  module.exports = app => app.use('/auth', routes)