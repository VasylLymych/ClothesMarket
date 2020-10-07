const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async (params, options) => {
    const replyCommentModel = db.getModel(DB_TABLE_NAME.REPLY_COMMENT);

    await replyCommentModel.update(params, options);
};