const express = require('express');
const routes = express.Router();
const connect = require('../db-connect/db')

  routes.get('/',async (req, res) => {
  const user = req.body
 
 
  const queryString = `SELECT * FROM People WHERE email = '${user.email}' AND senha = '${user.senha}'`

  console.log(queryString)
  await connect.query(queryString, (err, rows, fields) => {
    
    if (err) {
      console.log("Failed to query for Peoples", err)
      res.erroJson("usuario nao cadastrado",res)
      res.end()
      return
    }
    console.log("success")
    try{
    const hash = JSON.stringify(rows[0].email)
    res.send(hash)
    res.end()
    }catch(err){
      erroJson("nenhum usuario encontrado",res)
    }
  })
})

routes.post('/register', async (req, res) => {
  const user = req.body

  const queryString2 = `SELECT email FROM People where email = '${user.email}'`
  try {
    await connect.query(queryString2, function (err, result, fields) {
      const hasEmail = JSON.stringify(result[0])
      if (hasEmail != undefined) {
         erroJson("email ja esta em uso", res)
      } else {
        insertUserInDatabase(user, res,req)
      }
    }
    );
  }
  catch (err) {
    console.log(err)
  }
})

async function insertUserInDatabase(user,res,req) {
  const queryString = `INSERT INTO People VALUES ('','${user.green_coins}', '${user.orange_coins}', '${user.name}', '${user.birth_date}', '${user.work}', '${user.email}', '${user.senha}')`

  await connect.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for Peoples", err)
    erroJson("algum erro aconteceu :(")
      res.end()
      return
    }
    if (rows.insertId != null || rows.insertId != 0) {
      req.body.password = undefined
       res.send(req.body)

    }
    console.log("success")
     res.end()

  })
}


function erroJson(message, res) {
  const jsonErro = {
    status: "400",
    message: message
  }
  // res.send(400)
  res.end(JSON.stringify(jsonErro))
}



module.exports = routes;