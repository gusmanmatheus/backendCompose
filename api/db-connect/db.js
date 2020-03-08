const Sequelize = require('sequelize')
const sequelize = new Sequelize('proj', 'root', '', {
    host: 'db',
    dialect: "mysql"
    })
    sequelize.authenticate().then(function(){
        console.log("conectado com sucesso!")
    }).catch(function(erro){
        console.log("fala ao se conectar: "+ erro)
    })

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }