const fs = require('fs-extra');
const {resolve} = require('path');
const {v4: uuid} = require('uuid');
const {CustomError, CustomErrorData} = require('./../../error');
const {addProductPhoto} = require('./../../services')
const {RESPONSE_STATUS_CODE, PRODUCT_PHOTO_PARAMS} = require('./../../constant')

module.exports = (req, res, next) => {
    try {
        const {product_id} = req.params;
        const productPhotos = req.files.photos;
        const productPhotoPath = resolve(global.appRoot, 'static', 'productPhoto', `${product_id}`);
        let photoExtension = '';
        let randomPhotoName = '';
        let fullProductPhotoPath = '';
        let productPhotoData = {product_id};
        let wrongMimetypesStatus = false;
        let wrongMimetypesPhotos = [];
        let wrongSizeStatus = false;
        let wrongSizePhotos = [];

        fs.mkdirSync(productPhotoPath, {recursive: true})

        productPhotos.map(async (productPhoto) => {

            if (PRODUCT_PHOTO_PARAMS.MIMETYPES.indexOf(productPhoto.mimetype) === -1) {
                wrongMimetypesStatus = true;
                wrongMimetypesPhotos.push(productPhoto.name)
            }
            if (productPhoto.size > PRODUCT_PHOTO_PARAMS.SIZE) {
                wrongSizeStatus = true;
                wrongSizePhotos.push(productPhoto.name)
            }

            randomPhotoName = uuid();
            photoExtension = productPhoto.name.split('.').pop();
            fullProductPhotoPath = resolve(`${productPhotoPath}`, `${randomPhotoName}.${photoExtension}`);
            productPhotoData.photo = fullProductPhotoPath

            await Promise.all([productPhoto.mv(fullProductPhotoPath), addProductPhoto(productPhotoData)])

        })

        if (wrongMimetypesStatus)
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                `${wrongMimetypesPhotos} ${CustomErrorData.FORBIDDEN_PHOTO_MIMETYPE.message}:${PRODUCT_PHOTO_PARAMS.MIMETYPES}`,
                CustomErrorData.FORBIDDEN_PHOTO_MIMETYPE.code)
        if (wrongSizeStatus) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                `${wrongSizePhotos} ${CustomErrorData.FORBIDDEN_PHOTO_SIZE.message},
                ${CustomErrorData.FORBIDDEN_PHOTO_SIZE.code}`,
            )
        }

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}