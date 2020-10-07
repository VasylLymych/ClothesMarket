const {DB_TABLE_NAME} = require('../../constant/');

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(DB_TABLE_NAME.CART, {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true,
            },
            product_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: sequelize.fn('now')
            },

        },
        {
            tableName: DB_TABLE_NAME.CART,
            timestamps: false
        });

    const User = sequelize.import('./User');
    const Product = sequelize.import('./Product');

    Cart.belongsTo(User, {foreignKey: 'user_id'});
    Cart.belongsTo(Product, {foreignKey: 'product_id'});

    return Cart

};
