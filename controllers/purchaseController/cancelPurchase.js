const {CustomError} = require('../../error');
const {cancelPurchase} = require('../../services')

module.exports = async (req, res, next) => {
    try {
        const {id: purchase_id} = req.purchase;

        await cancelPurchase(purchase_id)

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};