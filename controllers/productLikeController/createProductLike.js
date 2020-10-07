const {CustomError, CustomErrorData} = require('./../../error');
const {RESPONSE_STATUS_CODE} = require('./../../constant');
const {createProductLike, getProductLikesByParams} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {id: user_id} = req.user;
        const {product_id} = req.params;

        const [productLikes] = await getProductLikesByParams({where: {user_id, product_id}, raw: true})

        if (productLikes) {
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_PRODUCT_IS_ALREADY_LIKED.message,
                CustomErrorData.BAD_REQUEST_PRODUCT_IS_ALREADY_LIKED.code)
        }

        await createProductLike({user_id, product_id})

        res.status(RESPONSE_STATUS_CODE.CREATED).end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
