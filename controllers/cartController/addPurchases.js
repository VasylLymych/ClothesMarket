const Joi = require('joi');
const {CustomError} = require('../../error');
const {RESPONSE_STATUS_CODE, PURCHASE_STATUS} = require('../../constant');
const {buyProduct} = require('../../services');
const {purchaseValidator} = require('./../../validators');

module.exports = async (req, res, next) => {
    try {
        const purchaseData = req.body;
        const products = req.products;
        purchaseData.user_id = 0;
        purchaseData.status_id = PURCHASE_STATUS.ACCEPTED;

        const validatedPurchaseData = await Joi.validate(purchaseData, purchaseValidator);

        if (validatedPurchaseData.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedPurchaseData.error.details[0].message)
        }

        await Promise.all(products.map(async (product) => {
            purchaseData.product_id = product.product_id

            await buyProduct(purchaseData)
        }));

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};