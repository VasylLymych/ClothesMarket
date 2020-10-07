const {getProductLikesByParams, deleteProductLike} = require('./../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res) => {
    try {
        const {product_id} = req.params;
        const {id: user_id} = req.user;

        const [productLike] = await getProductLikesByParams({
            where: {product_id, user_id},
            raw: true
        })

        await deleteProductLike(productLike.id);

        res.end();

    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }

}