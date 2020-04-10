
 module.exports = (sequelize, DataTypes) => {
   const adsense = sequelize.define("adsense", {
    type: DataTypes.STRING,
    learn: DataTypes.STRING,
    teach: DataTypes.STRING,
    value: DataTypes.STRING,
    user_id:{
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  },  
  ); 
  adsense.associate = function(models) {
    adsense.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };

  return adsense

};
