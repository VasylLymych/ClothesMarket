const {getPurchasesByParams} = require('../../services');
const {CustomError} = require('./../../error');
const {PURCHASE_STATUS} = require('./../../constant')
module.exports = async (req, res, next) => {
    try {
        let allPurchases = [];
        let paginatedPurchases = [];
        let {limit, page} = req.query;
        let offset = (page - 1) * limit;
        let allPurchasesAmount = 0;
        let allPagesAmount = 0;

        allPurchases = await getPurchasesByParams(
            {status_id: PURCHASE_STATUS.ACCEPTED}
        );


        allPurchasesAmount = allPurchases.length;
        allPagesAmount = allPurchasesAmount / limit;

        paginatedPurchases = await getPurchasesByParams(
            {status_id: PURCHASE_STATUS.ACCEPTED},
            limit,
            offset
        );

        res.json({allPurchasesAmount, allPagesAmount, paginatedPurchases})
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
