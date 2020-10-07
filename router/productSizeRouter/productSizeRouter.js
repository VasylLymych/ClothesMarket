const productSizeRouter = require('express').Router();
const {getAllProductSizes, addProductSize, deleteProductSize} = require('../../controllers');
const {checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin} = require('./../../middlewares');

productSizeRouter.post('/', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin, addProductSize);
productSizeRouter.get('/', getAllProductSizes)
productSizeRouter.delete('/:product_size_id', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin,
    deleteProductSize);

module.exports = productSizeRouter;