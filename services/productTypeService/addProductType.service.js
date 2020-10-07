const {DB_TABLE_NAME} = require('./../../constant');
const db = require('./../../dataBase').getInstance()

module.exports = async productType => {
    const productTypeModel = db.getModel(DB_TABLE_NAME.PRODUCT_TYPE);

    await productTypeModel.create(productType)
}