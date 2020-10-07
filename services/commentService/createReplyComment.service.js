const {DB_TABLE_NAME} = require('./../../constant');
const db = require('./../../dataBase').getInstance()

module.exports = async replyComment => {
    const replyCommentModel = db.getModel(DB_TABLE_NAME.REPLY_COMMENT);

    await replyCommentModel.create(replyComment)
}