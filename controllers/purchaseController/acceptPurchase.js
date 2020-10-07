const {CustomError, CustomErrorData} = require('../../error');
const {RESPONSE_STATUS_CODE} = require('../../constant');
const {acceptPurchase} = require('../../services')

module.exports = async (req, res, next) => {
    try {
        const {id: purchase_id, product_id} = req.purchase;

        await acceptPurchase(product_id,purchase_id)

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
