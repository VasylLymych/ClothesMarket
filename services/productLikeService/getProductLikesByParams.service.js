const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async params => {
    const productLike = db.getModel(DB_TABLE_NAME.PRODUCT_LIKE);

    const productLikes = await productLike.findAll(params);

    return productLikes
};