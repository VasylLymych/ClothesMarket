const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const purchaseStatusModel = db.getModel(DB_TABLE_NAME.PURCHASE_STATUS);

    const purchaseStatuses = await purchaseStatusModel.findAll({raw: true,});

    return purchaseStatuses
};