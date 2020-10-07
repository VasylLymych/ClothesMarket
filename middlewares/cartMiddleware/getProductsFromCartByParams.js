const {getProductsFromCartByParams} = require('./../../services');
const {CustomError, CustomErrorData} = require('./../../error');

module.exports = async (req, res, next) => {
    try {
        const {id: user_id} = req.user;

        let products = await getProductsFromCartByParams({user_id});

        if (!products[0])
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_NO_PRODUCTS_IN_CART.message,
                CustomErrorData.BAD_REQUEST_NO_PRODUCTS_IN_CART.code)

        req.products = products;

        next()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}
