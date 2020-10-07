const fs = require('fs');
const {resolve} = require('path');
const {deleteProductPhotoByParams,getProductPhotosByParams} = require('../../services');
const {CustomError,CustomErrorData} = require('./../../error');
const {RESPONSE_STATUS_CODE}=require('./../../constant')

module.exports = async (req, res, next) => {
    try {
        const {photo_id: id} = req.params;
        const {src} = req.query;

        const [productPhoto]=await getProductPhotosByParams({id});

        if(!productPhoto){
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_PRODUCT_PHOTO_IS_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_PRODUCT_PHOTO_IS_NOT_PRESENT.code)
        }

        fs.unlinkSync(resolve(src))
        await deleteProductPhotoByParams({id})

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}

