'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init({
    role_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Role',
    timestamps:false,
    tableName: 'blog_roles_restaurant'
  });
  return Role;
};