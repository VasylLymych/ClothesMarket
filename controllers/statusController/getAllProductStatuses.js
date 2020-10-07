const {getAllProductStatuses} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const productStatuses = await getAllProductStatuses();

        res.json(productStatuses);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}