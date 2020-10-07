const {DB_TABLE_NAME} = require('../../constant/');

module.exports = (sequelize, DataTypes) => {
    const Product_size = sequelize.define(DB_TABLE_NAME.PRODUCT_SIZE, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: DB_TABLE_NAME.PRODUCT_SIZE,
        timestamps: false
    });

    return Product_size
};
