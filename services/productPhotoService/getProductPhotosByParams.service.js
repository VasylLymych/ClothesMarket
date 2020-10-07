const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();
const {checkIsLimitAndOffsetPresent} = require('./../../helpers')
module.exports = async (params, limit, offset) => {
    const productPhotoModel = db.getModel(DB_TABLE_NAME.PRODUCT_PHOTO);

    const productPhotos = await productPhotoModel.findAll(checkIsLimitAndOffsetPresent(params, limit, offset));

    return productPhotos
};