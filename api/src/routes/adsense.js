const routes = require('express').Router();
// // const authMiddleware = require('../middlewares/auth')
// //  const connect = require('../db-connect/db');

// // routes.use(authMiddleware)

// // routes.post('/register',async(req, res) => {
// //   const adsense = req.body
// //   adsense.idPeople = req.idPeople
// //   console.log(   `INSERT INTO Adcense VALUES ('', '${adsense.teach}', '${adsense.learn}', '${adsense.type}','${adsense.idPeople}')`)
// //   try{
// //   const queryString = `INSERT INTO Adcense VALUES ('', '${adsense.teach}', '${adsense.learn}', '${adsense.type}','${adsense.idPeople}')`
// //   await connect.query(queryString,  (err, rows, fields) => {

// //     if(err){
// //      res.status(401).send({"error":"err"}) 
// //     }
// //   adsense.idAdcense = rows.insertId
// //     res.send({adsense}) 

// //   });
// // }catch(error){
// //   res.status(401).send({"err":"err"})
// // }
// //   });
 
// // routes.get('/get',async (req,res) => {
// //   const adsense = req.body
// //   adsense.idPeople = req.idPeople
// //   console.log(   `SELECT * FROM Adcense`)
// //   try{
// //   const queryString = `SELECT * FROM Adcense`
// //   await connect.query(queryString,  (err, rows, fields) => {

// //     if(err){
// //      res.status(401).send({"error":"err"}) 
// //     }
// //   adsense.idAdcense = rows.insertId
// //     res.send({"adsenses": rows}) 

// //   });
// // }catch(error){
// //   res.status(401).send({"err":"err"})
// // }});
module.exports = app => app.use('/ads', routes)