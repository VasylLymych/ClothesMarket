const productRouter = require('express').Router();
const {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllTopClothes,
    getAllBottomClothes,
    getAllUnderwearClothes,
    getAllGeneralClothes,
} = require('../../controllers');
const {checkAccessToken, getUserFromAccessToken, checkIsAdmin, getProductByParams} = require('./../../middlewares')

productRouter.post('/', checkAccessToken, getUserFromAccessToken, checkIsAdmin, createProduct);
productRouter.put('/:product_id', checkAccessToken, getUserFromAccessToken, checkIsAdmin, getProductByParams,
    updateProduct);
productRouter.delete('/:product_id', checkAccessToken, getUserFromAccessToken, checkIsAdmin, getProductByParams,
    deleteProduct);
productRouter.get('/topClothes', getAllTopClothes)
productRouter.get('/bottomClothes', getAllBottomClothes)
productRouter.get('/underwearClothes', getAllUnderwearClothes);
productRouter.get('/generalClothes', getAllGeneralClothes);


module.exports = productRouter;
