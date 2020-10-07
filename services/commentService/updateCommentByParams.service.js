const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async (params, options) => {
    const commentModel = db.getModel(DB_TABLE_NAME.COMMENT);
    await commentModel.update(params, options);
};