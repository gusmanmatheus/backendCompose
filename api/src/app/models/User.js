require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    green_coins: DataTypes.STRING,
    orange_coins: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    work: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 10)

        }
      }
    }
  } );
  user.associate = function(models) {
    user.hasMany(models.adsense, {
      foreignKey: 'user_id',
      as: 'adsense',
    });
  };
 
  user.prototype.checkPassword = function (password) {
    console.log(password, this.password_hash)
    return bcrypt.compare(password, this.password_hash);
  };
  user.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET, {
      expiresIn: 86400
    });
  }
  return user

};
