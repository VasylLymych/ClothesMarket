const {getAllProductTypes} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const productTypes = await getAllProductTypes();

        res.json(productTypes);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}