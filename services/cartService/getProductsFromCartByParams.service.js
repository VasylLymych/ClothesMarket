const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();
const {checkIsLimitAndOffsetPresent} = require('./../../helpers')

module.exports = async (params, limit, offset) => {
    const cartModel = db.getModel(DB_TABLE_NAME.CART);

    const products = await cartModel.findAll(checkIsLimitAndOffsetPresent(params,limit,offset));

    return products
};