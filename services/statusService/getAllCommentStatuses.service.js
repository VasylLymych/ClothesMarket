const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const commentStatusModel = db.getModel(DB_TABLE_NAME.COMMENT_STATUS);

    const commentStatuses = await commentStatusModel.findAll({raw: true,});

    return commentStatuses
};