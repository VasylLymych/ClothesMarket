const {DB_TABLE_NAME} = require('../../constant');

const db = require('../../dataBase').getInstance();

module.exports = async (product) => {
    const productModel = db.getModel(DB_TABLE_NAME.PRODUCT);
    await productModel.create(product)
};