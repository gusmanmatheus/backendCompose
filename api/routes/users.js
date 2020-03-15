const express = require('express');
const routes = express.Router();
const connect = require('../db-connect/db')

routes.get('/', (req,res)=> {
  const email = req.body.email
  const senha = req.body.senha

  console.log(email)

   const queryString = `SELECT * FROM People WHERE email = '${email}' AND senha = '${senha}'`

 console.log(queryString)
 connect.query(queryString, (err,rows,fields) => {

    if(err) {
      console.log("Failed to query for Peoples", err)
      res.sendStatus(500)  
      res.end()
      return 
    }
    console.log("success")

    res.json(rows)
    res.end()

  })
  })

  routes.post('/register',(req,res)=>{

  const green_coins	= '0'
  const orange_coins = '0'	
  const name = req.body.name
  const birth_date = req.body.birth_date 
  const email = req.body.email
  const senha = req.body.senha
  const work = req.body.work
  const queryString = `INSERT INTO People VALUES ('','${green_coins}', '${orange_coins}', '${name}', '${birth_date}', '${email}', '${senha}', '${work}')` 

  console.log(queryString)
  connect.query(queryString, (err,rows,fields) => {
 
     if(err) {
       console.log("Failed to query for Peoples", err)
       res.sendStatus(500)  
       res.end()
       return 
     }
     if(rows.insertId !=null || rows.insertId != 0 ){
      res.json({"succes": "ok"})


     }
     console.log("success")
 
     res.json(rows)
     res.end()
 
   })
    })
module.exports = routes;