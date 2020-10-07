const {DB_TABLE_NAME} = require('../../constant');

module.exports = (sequelize, DataTypes) => {
    const Reply_comment = sequelize.define(DB_TABLE_NAME.REPLY_COMMENT, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment_id: {
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
        tableName: DB_TABLE_NAME.REPLY_COMMENT,
        timestamps: false
    });

    const User = sequelize.import('./User');
    const Comment = sequelize.import('./Comment');
    const Comment_status = sequelize.import('./Comment_status');

    Reply_comment.belongsTo(User, {foreignKey: 'user_id'});
    Reply_comment.belongsTo(Comment, {foreignKey: 'comment_id'});
    Reply_comment.belongsTo(Comment_status, {foreignKey: 'status_id'});

    return Reply_comment

};
