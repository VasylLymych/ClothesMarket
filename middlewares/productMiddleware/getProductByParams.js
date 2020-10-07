const {RESPONSE_STATUS_CODE, PRODUCT_STATUS} = require('./../../constant');
const {CustomError, CustomErrorData} = require('./../../error');
const {getProductsByParams} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {product_id: id} = req.params;

        const [product] = await getProductsByParams({id});

        if (!product || product.status === PRODUCT_STATUS.DELETED) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                CustomErrorData.BAD_REQUEST_PRODUCT_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_PRODUCT_NOT_PRESENT.code)
        }

        req.product = product;
        next();
    } catch (e) {
        next( new CustomError(e.status, e.message, e.code))
    }
}