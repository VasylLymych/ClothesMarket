const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const productSizeModel = db.getModel(DB_TABLE_NAME.PRODUCT_SIZE);

    const productSizes = await productSizeModel.findAll({raw: true});

    return productSizes
};