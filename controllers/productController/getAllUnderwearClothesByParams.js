const {getProductsByParams} = require('../../services');
const {CustomError} = require('./../../error');
const {PRODUCT_STATUS, PRODUCT_SECTION} = require('./../../constant');

module.exports = async (req, res, next) => {
    try {
        let allProducts = [];
        let paginatedProducts = [];
        let {limit, page} = req.query;
        let offset = (page - 1) * limit;
        const queryParams = req.query;
        let params = {};
        let isParamsPresent = false;
        let allProductsAmount = 0;
        let allPagesAmount = 0;

        for (const key in queryParams) {
            if (key !== 'page' && key !== 'limit') {
                params[key] = +(queryParams[key])
                isParamsPresent = true
            }
        }


        if (!isParamsPresent) {
            allProducts = await getProductsByParams(
                {
                    section_id: PRODUCT_SECTION.UNDERWEAR,
                    status_id: PRODUCT_STATUS.IN_STOCK
                }
            );

            allProductsAmount = allProducts.length;
            allPagesAmount = allProductsAmount / limit;

            paginatedProducts = await getProductsByParams(
                {
                    section_id: PRODUCT_SECTION.UNDERWEAR,
                    status_id: PRODUCT_STATUS.IN_STOCK
                },
                limit,
                offset
            );
        } else {
            params.section_id = PRODUCT_SECTION.UNDERWEAR;
            params.status_id = PRODUCT_STATUS.IN_STOCK;

            allProducts = await getProductsByParams(params);

            allProductsAmount = allProducts.length;
            allPagesAmount = allProductsAmount / limit;

            paginatedProducts = await getProductsByParams(params, limit, offset);
        }
        res.json({allProductsAmount, allPagesAmount, paginatedProducts})
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
