const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const productTypeModel = db.getModel(DB_TABLE_NAME.PRODUCT_TYPE);

    const productTypes = await productTypeModel.findAll({raw: true});

    return productTypes
};