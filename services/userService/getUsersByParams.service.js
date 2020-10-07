const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();
const {checkIsLimitAndOffsetPresent} = require('./../../helpers')
module.exports = async (params, limit, offset) => {
    const userModel = db.getModel(DB_TABLE_NAME.USER);

    const user = await userModel.findAll(checkIsLimitAndOffsetPresent(params, limit, offset));

    return user
};