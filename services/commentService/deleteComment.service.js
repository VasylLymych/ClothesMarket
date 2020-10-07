const {DB_TABLE_NAME, COMMENT_STATUS} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async id => {
    const commentModel = db.getModel(DB_TABLE_NAME.COMMENT);

    await commentModel.update({
            status_id: COMMENT_STATUS.DELETED
        },
        {
            where: {
                id
            }
        });

};
