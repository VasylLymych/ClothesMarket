const productLikeRouter = require('express').Router();
const {checkAccessToken, getUserFromAccessToken, getProductByParams} = require('./../../middlewares');
const {createProductLike, deleteProductLike, getAmountOfProductLikes} = require('./../../controllers')

productLikeRouter.post('/:product_id', checkAccessToken, getUserFromAccessToken, getProductByParams,
    createProductLike);
productLikeRouter.delete('/:product_id', checkAccessToken, getUserFromAccessToken, getProductByParams,
    deleteProductLike)
productLikeRouter.get('/:product_id', getAmountOfProductLikes)

module.exports = productLikeRouter;


