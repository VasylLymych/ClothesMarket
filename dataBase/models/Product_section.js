const {DB_TABLE_NAME} = require('./../../constant')

module.exports = (sequelize, DataTypes) => {
    const Product_section= sequelize.define(DB_TABLE_NAME.PRODUCT_SECTION, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            section: {
                type: DataTypes.STRING,
                allowNull: false,
                unique:true
            }
        },
        {
            tableName: DB_TABLE_NAME.PRODUCT_SECTION,
            timestamps: false
        })

    return Product_section
}