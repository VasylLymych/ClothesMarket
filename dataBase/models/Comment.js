const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(DB_TABLE_NAME.COMMENT, {
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
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now')
        }

    }, {
        tableName: DB_TABLE_NAME.COMMENT,
        timestamps: false
    });

    const User = sequelize.import('./User');
    const Product = sequelize.import('./Product');
    const Comment_status = sequelize.import('./Comment_status');

    Comment.belongsTo(User, {foreignKey: 'user_id'});
    Comment.belongsTo(Product, {foreignKey: 'product_id'});
    Comment.belongsTo(Comment_status, {foreignKey: 'status_id'});

    return Comment

};
