const {DB_TABLE_NAME} = require('../../constant/');

module.exports = (sequelize, DataTypes) => {
    const Purchase = sequelize.define(DB_TABLE_NAME.PURCHASE, {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                unique: true,
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
            status_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false,
            },
            novaposhta_address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: sequelize.fn('now')
            },
            phone_number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            middle_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: DB_TABLE_NAME.PURCHASE,
            timestamps: false
        });

    const User = sequelize.import('./User');
    const Product = sequelize.import('./Product');
    const Purchase_status = sequelize.import('./Purchase_status');

    Purchase.belongsTo(User, {foreignKey: 'user_id'});
    Purchase.belongsTo(Product, {foreignKey: 'product_id'});
    Purchase.belongsTo(Purchase_status, {foreignKey: 'status_id'});

    return Purchase

};
