const {RESPONSE_STATUS_CODE, PURCHASE_STATUS} = require('./../../constant');
const {CustomError, CustomErrorData} = require('./../../error');
const {getPurchasesByParams: checkArePurchasesPresent} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        let authorizedPurchase = product => product.product_id
        let unauthorizedPurchase = product => product
        let product_id;
        let user_id;
        let products;
        let presentPurchases = [];
        let presentPurchasesStatus = false;

        if (req.products && req.user) {
            products = req.products;
            user_id = req.user['id'];
            product_id = authorizedPurchase;
        } else {
            products = req.body['products_id'];
            user_id = 0;
            product_id = unauthorizedPurchase;
        }

        let purchases = await Promise.all(products.map(async product => {

            let [purchaseItem] = await checkArePurchasesPresent({
                user_id,
                product_id: product_id(product),
                status_id: PURCHASE_STATUS.IN_PROCESS
            });

            return purchaseItem

        }));

        purchases.map(async purchase => {
            if (purchase) {
                presentPurchasesStatus = true;
                presentPurchases.push(purchase.product_id)
            }
        })

        if (presentPurchasesStatus)
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                `${CustomErrorData.BAD_REQUEST_SOME_PURCHASES_ARE_ALREADY_PRESENT.message} ${presentPurchases}`,
                CustomErrorData.BAD_REQUEST_SOME_PURCHASES_ARE_ALREADY_PRESENT.code)

        next();
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}









