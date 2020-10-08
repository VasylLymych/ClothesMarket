const Joi = require('joi');
const {CustomError} = require('../../error');
const {RESPONSE_STATUS_CODE, PURCHASE_STATUS} = require('../../constant');
const {buyProducts} = require('../../services');
const {purchaseValidator} = require('../../validators')

module.exports = async (req, res, next) => {
    try {
        const purchaseData = req.body;
        const {products_id} = req.body;

        delete purchaseData.products_id

        purchaseData.user_id = 0;
        purchaseData.status_id = PURCHASE_STATUS.IN_PROCESS;

        let validatedPurchaseData = await Joi.validate(purchaseData, purchaseValidator);

        if (validatedPurchaseData.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedPurchaseData.error.details[0].message)
        }

        await Promise.all(products_id.map(async (id) => {
            purchaseData.product_id = id

            await buyProducts(purchaseData)
        }));

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
