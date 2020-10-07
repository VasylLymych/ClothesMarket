const {DB_TABLE_NAME} = require('./../../constant');
const db = require('./../../dataBase').getInstance()

module.exports = async productSize => {
    const productSizeModel = db.getModel(DB_TABLE_NAME.PRODUCT_SIZE);

    await productSizeModel.create(productSize)
}