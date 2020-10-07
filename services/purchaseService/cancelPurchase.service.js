const {DB_TABLE_NAME, PURCHASE_STATUS} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async purchase_id => {
    const purchaseModel = db.getModel(DB_TABLE_NAME.PURCHASE);

    await purchaseModel.update(
        {
            status_id: PURCHASE_STATUS.CANCELLED
        },
        {
            where: {
                id: purchase_id
            }
        }
    )
};