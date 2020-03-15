// const Sequelize = require('sequelize');
const dbConfig = require('../dbconfig/dbconfig');
// const connection= new Sequelize(dbConfig)

// // estou athenticando so pra ver se tem alguma falha na coneccao
// connection.authenticate().then(function(){
//     console.log("conectado com sucesso!")
// }).catch(function(erro){
//     console.log("fala ao se conectar: "+ erro)
// })
const mysql = require('mysql')
const connection = mysql.createConnection(dbConfig)
module.exports = connection;