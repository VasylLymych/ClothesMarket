const Joi = require('joi');
const {CustomError} = require('../../error');
const {RESPONSE_STATUS_CODE, PURCHASE_STATUS} = require('../../constant');
const {buyProduct: buyProducts} = require('../../services');
const {purchaseValidator} = require('./../../validators')

module.exports = async (req, res, next) => {
    try {
        const {id: user_id} = req.user;
        const purchaseData = req.body;
        const products = req.products;
        purchaseData.product_id = 0;
        purchaseData.user_id = 0;
        purchaseData.status_id = PURCHASE_STATUS.IN_PROCESS;

        let validatedPurchaseData = await Joi.validate(purchaseData, purchaseValidator);

        if (validatedPurchaseData.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedPurchaseData.error.details[0].message)
        }

        products.map(async (product) => {
            purchaseData.product_id = product.id;

            await buyProducts(purchaseData)
        })

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
