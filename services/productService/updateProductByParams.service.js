const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async (params, options) => {
    const productModel = db.getModel(DB_TABLE_NAME.PRODUCT);

    await productModel.update(params, options);
};