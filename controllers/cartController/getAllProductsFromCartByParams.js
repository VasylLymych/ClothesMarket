const {getProductsFromCartByParams} = require('../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res, next) => {
    try {
        let {id: user_id} = req.user;
        let allProducts = [];
        let paginatedProducts = [];
        let {limit, page} = req.query;
        let offset = (page - 1) * limit;
        let allProductsAmount = 0;
        let allPagesAmount = 0;

        allProducts = await getProductsFromCartByParams(
            {user_id}
        );

        allProductsAmount = allProducts.length;
        allPagesAmount = allProductsAmount / limit;

        paginatedProducts = await getProductsFromCartByParams(
            {user_id},
            limit,
            offset
        );

        res.json({allProductsAmount, allPagesAmount, paginatedProducts})
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
