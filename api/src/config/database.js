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
  host: "db", 
  username: "root",
  password: "pass",
  database: "project",
  dialect:  "mysql",
 storage: "./__tests__/database.sqlite",
  logging: false,
  difine: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }, 
};
