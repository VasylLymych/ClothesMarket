const {DB_TABLE_NAME} = require('./../../constant');
const db = require('./../../dataBase').getInstance()

module.exports = async productPhoto => {
    const productPhotoModel = db.getModel(DB_TABLE_NAME.PRODUCT_PHOTO);

    await productPhotoModel.create(productPhoto)
}