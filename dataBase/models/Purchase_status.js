const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Purchase_status = sequelize.define(DB_TABLE_NAME.PURCHASE_STATUS, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: DB_TABLE_NAME.PURCHASE_STATUS,
        timestamps: false
    });


    return Purchase_status

};
