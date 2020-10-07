const productTypeRouter = require('express').Router();
const {getAllProductTypes, addProductType, deleteProductType} = require('../../controllers');
const {checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin} = require('./../../middlewares');

productTypeRouter.post('/', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin, addProductType);
productTypeRouter.get('/', getAllProductTypes)
productTypeRouter.delete('/:product_type_id', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin, deleteProductType);

module.exports = productTypeRouter;