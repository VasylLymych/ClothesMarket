const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async params => {
    const commentModel = db.getModel(DB_TABLE_NAME.COMMENT);

    const comments = await commentModel.findAll(params);

    return comments
};