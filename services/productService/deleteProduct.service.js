const {DB_TABLE_NAME, PRODUCT_STATUS} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async id => {
    const productModel = db.getModel(DB_TABLE_NAME.PRODUCT);

    await productModel.update({
            status_id: PRODUCT_STATUS.DELETED
        },
        {
            where: {
                id
            }
        });

};
