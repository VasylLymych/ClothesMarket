const {DB_TABLE_NAME, COMMENT_STATUS} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async id => {
    const replyCommentModel = db.getModel(DB_TABLE_NAME.REPLY_COMMENT);

    await replyCommentModel.update({
            status_id: COMMENT_STATUS.DELETED
        },
        {
            where: {
                id
            }
        });

};
