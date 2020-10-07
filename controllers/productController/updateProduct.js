const Joi = require('joi');
const {updateProductByParams} = require('./../../services');
const {CustomError} = require('./../../error');
const {productValidator} = require('./../../validators');
const {RESPONSE_STATUS_CODE, PRODUCT_STATUS} = require('./../../constant');

module.exports = async (req, res) => {
    try {
        const {id} = req.product;
        const product = req.body;
        product.status_id = PRODUCT_STATUS.IN_STOCK;
        const validatedProduct = await Joi.validate(product, productValidator);
        product.date = new Date();

        if (validatedProduct.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedProduct.error.details[0].message)
        }

        await updateProductByParams(product, {where: {id}})

        res.end();
    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }

}