const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async options => {
    const productTypeModel = db.getModel(DB_TABLE_NAME.PRODUCT_TYPE);

    await productTypeModel.destroy({where:options})
};
