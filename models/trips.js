const { Model, DataTypes } = require('sequelize'),
class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'location'
  }
);

module.exports = Trip;