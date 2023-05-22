'use strict';
const moment = require('moment')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Reply, {
        as:'replies',
        foreignKey:'parent_order_id'
      })
    }
  };
  Order.init({
    chef_name: DataTypes.STRING,
    body: DataTypes.STRING,
    ordered_on: DataTypes.DATE,
    menu_id: DataTypes.STRING,
    parent_order_id: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
    orderedAgo: {
      type: DataTypes.VIRTUAL,
      get(){
        let orderOn = moment(this.ordered_on);
        let now = moment();
        return moment.duration(orderedOn.diff(now)).humanize(true);
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName:'blog_orders',
    timestamps: false,
    defaultScope: {
      where: {
        parent_order_id: null
      }
    }
  });
  return Order;
};