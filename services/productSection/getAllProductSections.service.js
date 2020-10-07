const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const productSectionModel = db.getModel(DB_TABLE_NAME.PRODUCT_SECTION);

    const productSections = await productSectionModel.findAll({raw: true});

    return productSections
};