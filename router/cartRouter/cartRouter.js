const cartRouter = require('express').Router();
const {addPurchase,
    addProductToCart,
    buyProduct,
    getAllProductsFromCartByParams,
    deleteProductFromCart,
    unauthorizedPurchase} = require('./../../controllers')

const {
    checkAccessToken,
    getUserFromAccessToken,
    getProductByParams,
    checkIsAdmin
} = require('./../../middlewares')

cartRouter.post('/addProduct/:product_id', checkAccessToken, getUserFromAccessToken, getProductByParams,
    addProductToCart)
cartRouter.delete('/:product_id', checkAccessToken, getUserFromAccessToken, deleteProductFromCart)
cartRouter.get('/', checkAccessToken, getUserFromAccessToken, getAllProductsFromCartByParams)
cartRouter.post('/buy', checkAccessToken, getUserFromAccessToken, buyProduct)
cartRouter.post('/addPurchase', checkAccessToken, getUserFromAccessToken, checkIsAdmin, addPurchase)
cartRouter.post('/unauthorizedPurchase',checkAccessToken,unauthorizedPurchase)

module.exports = cartRouter;


