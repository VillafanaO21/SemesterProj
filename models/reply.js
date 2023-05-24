'use strict';
const moment = require('moment')
const {
    Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reply extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Reply.init({
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
        modelName: 'Reply',
        timestamps: false,
        tableName:'blog_orders',
        defaultScope: {
            where: {
                parent_order_id: {
                    [Op.ne]: null
                }
            }
        }
    });
    return Reply;
};