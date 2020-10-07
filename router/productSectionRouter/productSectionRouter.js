const productSectionRouter = require('express').Router();
const {getAllProductSections, addProductSection, deleteProductSection} = require('../../controllers');
const {checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin} = require('./../../middlewares');

productSectionRouter.post('/', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin, addProductSection);
productSectionRouter.get('/', getAllProductSections)
productSectionRouter.delete('/:product_section_id', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin,
    deleteProductSection);

module.exports = productSectionRouter;
