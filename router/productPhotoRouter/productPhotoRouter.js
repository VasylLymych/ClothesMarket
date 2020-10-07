const productPhotoRouter = require('express').Router();
const fileUpload = require('express-fileupload');
const {checkAccessToken, getUserFromAccessToken, checkIsAdmin, getProductByParams} = require('./../../middlewares');
const {addProductPhoto, getAllProductPhotosByParams, deleteProductPhoto} = require('./../../controllers')


productPhotoRouter.post('/upload/:product_id', fileUpload(), checkAccessToken, getUserFromAccessToken,
    checkIsAdmin, getProductByParams, addProductPhoto)
productPhotoRouter.get('/:product_id', getProductByParams, getAllProductPhotosByParams)
productPhotoRouter.delete('/:photo_id', checkAccessToken, getUserFromAccessToken, checkIsAdmin, deleteProductPhoto)

module.exports = productPhotoRouter;


