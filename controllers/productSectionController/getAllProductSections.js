const {getAllProductSections} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const productSections = await getAllProductSections();

        res.json(productSections);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}