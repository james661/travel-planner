const { Model, DataTypes } = require('sequelize');
class Traveller extends Model {}

Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
    }
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
  {
    sequelize,
    freezeTableName: true,
    modelName: 'traveller'
  }
);

module.exports = Traveller;