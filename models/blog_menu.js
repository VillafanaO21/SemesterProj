'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog_menu.init({
    title: DataTypes.STRING,
    intro: DataTypes.STRING,
    body: DataTypes.STRING,
    image_url: DataTypes,
    chef_id: DataTypes.INTEGER,
    published_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Blog_menu',
    timestamps:false,
    tableName: 'blog_menu'
  });
  return Blog_menu;
};