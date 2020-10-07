const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Product_like = sequelize.define(DB_TABLE_NAME.PRODUCT_LIKE, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    }, {
        tableName: DB_TABLE_NAME.PRODUCT_LIKE,
        timestamps: false
    });

    const User = sequelize.import('./User');
    const Product = sequelize.import('./Product');

    Product_like.belongsTo(User, {foreignKey: 'user_id'});
    Product_like.belongsTo(Product, {foreignKey: 'product_id'});

    return Product_like

};
