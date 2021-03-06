const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();
const {checkIsLimitAndOffsetPresent} = require('./../../helpers');

module.exports = async (params, limit, offset) => {
    const purchaseModel = db.getModel(DB_TABLE_NAME.PURCHASE);

    const purchases = await purchaseModel.findAll(checkIsLimitAndOffsetPresent(params, limit, offset));

    return purchases
};