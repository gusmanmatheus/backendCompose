// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || "8080",
  host: process.env.DB_HOST,  
  storage: "./__tests__/database.sqlite",
  dialect: process.env.DB_DIALECT || "mysql",
  operatorsAliases: false,
  logging: false,
  difine: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },


};
