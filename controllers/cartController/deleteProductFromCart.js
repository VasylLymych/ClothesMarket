const {deleteProductFromCart, getProductsFromCartByParams} = require('./../../services');
const {CustomError, CustomErrorData} = require('./../../error');
const {RESPONSE_STATUS_CODE} = require('./../../constant');

module.exports = async (req, res, next) => {
    try {
        const {product_id} = req.params;
        const {id:user_id}=req.user;

        const [product] = await getProductsFromCartByParams({user_id,product_id});

        if (!product) {
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_PRODUCT_IS_NOT_PRESENT_IN_CART.message,
                CustomErrorData.BAD_REQUEST_PRODUCT_IS_NOT_PRESENT_IN_CART.code)
        }

        await deleteProductFromCart({user_id, product_id});

        res.end()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}