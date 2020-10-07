const {getAllPurchaseStatuses} = require('../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res, next) => {
    try {
        const purchaseStatuses = await getAllPurchaseStatuses();

        res.json(purchaseStatuses);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}
