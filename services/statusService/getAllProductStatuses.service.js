const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const productStatusModel = db.getModel(DB_TABLE_NAME.PRODUCT_STATUS);

    const productStatuses = await productStatusModel.findAll({raw: true,});

    return productStatuses
};