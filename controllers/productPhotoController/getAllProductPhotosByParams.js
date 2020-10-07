const {getProductPhotosByParams} = require('../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res, next) => {
    try {
        const {product_id} = req.params;
        let allPhotos = [];
        let paginatedPhotos = [];
        let {limit, page} = req.query;
        let offset = (page - 1) * limit;
        let allPhotosAmount = 0;
        let allPagesAmount = 0;

        allPhotos = await getProductPhotosByParams({product_id});
        console.log(allPhotos);
        allPhotosAmount = allPhotos.length;
        allPagesAmount = allPhotosAmount / limit;

        paginatedPhotos = await getProductPhotosByParams({product_id}, limit, offset);

        res.json({allPhotosAmount, allPagesAmount, paginatedPhotos})
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}

