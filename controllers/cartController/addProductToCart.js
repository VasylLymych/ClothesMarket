const {CustomError, CustomErrorData} = require('../../error');
const {RESPONSE_STATUS_CODE} = require('../../constant');
const {addProductToCart, getProductsFromCartByParams} = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const {id: user_id} = req.user;
        const {id: product_id} = req.product;

        const [product] = await getProductsFromCartByParams({user_id, product_id});

        if (product) {
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_PRODUCT_IS_ALREADY_PRESENT_IN_CART.message,
                CustomErrorData.BAD_REQUEST_PRODUCT_IS_ALREADY_PRESENT_IN_CART.code)
        }

        await addProductToCart({user_id, product_id});

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
