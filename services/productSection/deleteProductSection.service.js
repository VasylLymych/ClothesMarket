const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async options => {
    const productSectionModel = db.getModel(DB_TABLE_NAME.PRODUCT_SECTION);

    await productSectionModel.destroy({where: options})
};
