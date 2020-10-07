const {deleteProductType} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const {product_type_id} = req.params

        await deleteProductType({product_type_id});

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}