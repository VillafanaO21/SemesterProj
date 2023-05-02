'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    chef_name: DataTypes.STRING,
    body: DataTypes.STRING,
    menu_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
    tableName:'blog_orders'
  });
  return Comment;
};