const Joi = require('joi');
const {createProduct} = require('../../services');
const {CustomError} = require('./../../error');
const {RESPONSE_STATUS_CODE, PRODUCT_STATUS} = require('./../../constant');
const {productValidator} = require('./../../validators')

module.exports = async (req, res, next) => {
    try {
        const product = req.body;
        product.status_id = PRODUCT_STATUS.IN_STOCK;

        const validatedProduct = await Joi.validate(product, productValidator)

        if (validatedProduct.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedProduct.error.details[0].message)
        }

        await createProduct(product);

        res.status(RESPONSE_STATUS_CODE.CREATED).end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
