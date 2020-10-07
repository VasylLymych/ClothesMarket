const {RESPONSE_STATUS_CODE, PRODUCT_STATUS} = require('./../../constant');
const {CustomError, CustomErrorData} = require('./../../error');
const {getProductsByParams, getProductsFromCartByParams} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        let authorizedPurchase = product => product.product_id
        let unauthorizedPurchase = product => product
        let productsFromCart;
        let absentProducts = [];
        let absentProductsStatus = false;

        if (req.user) {
            const {id: user_id} = req.user;
            productsFromCart = req.products
            product_id = authorizedPurchase;
        } else {
            productsFromCart = req.body['products_id'];
            product_id = unauthorizedPurchase;
        }

        let products = await Promise.all(productsFromCart.map(async product => {

            let [productItem] = await getProductsByParams({
                product_id: product_id(product),
                status_id: PRODUCT_STATUS.IN_STOCK
            });

            return productItem

        }));

        products.map(async product => {
            if (!product) {
                absentProductsStatus = true;
                absentProducts.push(product.product_id)
            }
        })

        if (absentProductsStatus)
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                `${CustomErrorData.BAD_REQUEST_SOME_PRODUCTS_ARE_ABSENT.message} ${absentProducts}`,
                CustomErrorData.BAD_REQUEST_SOME_PRODUCTS_ARE_ABSENT.code)

        next();
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}









