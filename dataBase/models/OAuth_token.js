const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const OAuth_token = sequelize.define(DB_TABLE_NAME.OAUTH_TOKEN, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accessToken: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: DB_TABLE_NAME.OAUTH_TOKEN,
        timestamps: false
    });
    const User = sequelize.import('./User');

    OAuth_token.belongsTo(User, {foreignKey: 'user_id'});

    return OAuth_token

};
