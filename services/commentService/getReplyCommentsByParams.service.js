const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async params => {
    const ReplyCommentModel = db.getModel(DB_TABLE_NAME.REPLY_COMMENT);

    const replyComments = await ReplyCommentModel.findAll(params);

    return replyComments
};