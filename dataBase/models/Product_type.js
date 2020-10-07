const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Product_type = sequelize.define(DB_TABLE_NAME.PRODUCT_TYPE, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: DB_TABLE_NAME.PRODUCT_TYPE,
        timestamps: false
    });


    return Product_type

};
