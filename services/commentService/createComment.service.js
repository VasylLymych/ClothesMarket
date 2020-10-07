const {DB_TABLE_NAME} = require('./../../constant');
const db = require('./../../dataBase').getInstance()

module.exports = async comment => {
    const commentModel = db.getModel(DB_TABLE_NAME.COMMENT);

    await commentModel.create(comment)
}