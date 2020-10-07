const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define(DB_TABLE_NAME.GENDER, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: DB_TABLE_NAME.GENDER,
        timestamps: false
    });

    return Gender

};
