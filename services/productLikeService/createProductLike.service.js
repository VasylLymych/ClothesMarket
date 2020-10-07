const {DB_TABLE_NAME} = require('./../../constant');
const db = require('./../../dataBase').getInstance()

module.exports = async productLike => {
    const productLikeModel = db.getModel(DB_TABLE_NAME.PRODUCT_LIKE);

    await productLikeModel.create(productLike)
}