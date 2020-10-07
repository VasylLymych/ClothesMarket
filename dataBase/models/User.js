const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(DB_TABLE_NAME.USER, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
        }
    }, {
        tableName: DB_TABLE_NAME.USER,
        timestamps: false
    });

    const User_role = sequelize.import('./User_role');
    const User_status = sequelize.import('./User_status');
    const Gender = sequelize.import('./Gender');

    User.belongsTo(Gender, {foreignKey: 'gender_id'});
    User.belongsTo(User_role, {foreignKey: 'role_id'});
    User.belongsTo(User_status, {foreignKey: 'status_id'});

    return User

};
