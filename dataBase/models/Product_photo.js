const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Product_photo = sequelize.define(DB_TABLE_NAME.PRODUCT_PHOTO, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: DB_TABLE_NAME.PRODUCT_PHOTO,
        timestamps: false
    });

    const Product = sequelize.import('./Product');

    Product_photo.belongsTo(Product, {foreignKey: 'product_id'});


    return Product_photo

};
