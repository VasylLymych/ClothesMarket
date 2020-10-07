const {RESPONSE_STATUS_CODE, PURCHASE_STATUS} = require('./../../constant');
const {CustomError, CustomErrorData} = require('./../../error');
const {getPurchasesByParams} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {purchase_id: id} = req.params;

        const [purchase] = await getPurchasesByParams({id});

        if (!purchase || purchase.status_id !== PURCHASE_STATUS.IN_PROCESS) {
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_PURCHASE_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_PURCHASE_NOT_PRESENT.code)
        }

        req.purchase = purchase;

        next();
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}