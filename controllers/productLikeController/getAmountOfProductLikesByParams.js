const {getProductLikesByParams} = require('./../../services')

module.exports = async (req, res) => {
    const {product_id} = req.params;
    let productLikes = [];

    productLikes = await getProductLikesByParams({where: {product_id}})

    res.json({amountOfProductLikes: productLikes.length})
}