const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(DB_TABLE_NAME.PRODUCT, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        gender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        size_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        section_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        tableName: DB_TABLE_NAME.PRODUCT,
        timestamps: false
    });

    const Product_type = sequelize.import('./Product_type');
    const Product_status = sequelize.import('./Product_status');
    const Product_size = sequelize.import('./Product_size');
    const Product_section = sequelize.import('./Product_section');
    const Gender = sequelize.import('./Gender');

    Product.belongsTo(Product_type, {foreignKey: 'type_id'});
    Product.belongsTo(Product_status, {foreignKey: 'status_id'});
    Product.belongsTo(Gender, {foreignKey: 'gender_id'});
    Product.belongsTo(Product_size, {foreignKey: 'size_id'});
    Product.belongsTo(Product_section, {foreignKey: 'section_id'});

    return Product

};
