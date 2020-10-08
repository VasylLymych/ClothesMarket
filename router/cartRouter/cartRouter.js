const cartRouter = require('express').Router();
const {
    addPurchases,
    addProductToCart,
    buyProducts,
    getAllProductsFromCartByParams,
    deleteProductFromCart,
    unauthorizedPurchase
} = require('./../../controllers')

const {
    checkAccessToken,
    getUserFromAccessToken,
    getProductByParams,
    checkIsAdmin,
    checkAreProductsFromCartPresent,
    getProductsFromCartByParams,
    checkArePurchasesPresent
} = require('./../../middlewares')

cartRouter.post('/addProduct/:product_id', checkAccessToken, getUserFromAccessToken, getProductByParams,
    addProductToCart)
cartRouter.delete('/:product_id', checkAccessToken, getUserFromAccessToken, deleteProductFromCart)
cartRouter.get('/', checkAccessToken, getUserFromAccessToken, getAllProductsFromCartByParams)
cartRouter.post('/buy', checkAccessToken, getUserFromAccessToken, getProductsFromCartByParams,
    checkAreProductsFromCartPresent, checkArePurchasesPresent, buyProducts)
cartRouter.post('/addPurchase', checkAccessToken, getUserFromAccessToken, checkIsAdmin, getProductsFromCartByParams,
    checkAreProductsFromCartPresent, checkArePurchasesPresent, addPurchases)
cartRouter.post('/unauthorizedPurchase', checkAreProductsFromCartPresent, checkArePurchasesPresent, unauthorizedPurchase)

module.exports = cartRouter;


