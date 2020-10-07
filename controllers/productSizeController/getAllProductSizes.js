const {getAllProductSizes} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const productSizes = await getAllProductSizes();

        res.json(productSizes);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}