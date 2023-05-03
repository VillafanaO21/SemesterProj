'use strict';
const moment = require('moment')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.User, {
        as: 'chef',
        foreignKey: 'chef_id'
      });
      Menu.hasMany(models.Order, {
        as:'order',
        foreignKey:'menu_id'
      });
    }
  };
  Menu.init({
    title: DataTypes.STRING,
    intro: DataTypes.STRING,
    body: DataTypes.STRING,
    image_url: DataTypes.STRING,
    chef_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Menu',
    timestamps:false,
    tableName: 'restaurant_menu'
  });
  return Menu;
};