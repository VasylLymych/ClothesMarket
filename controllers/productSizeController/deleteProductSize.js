const {deleteProductSize} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const {product_size_id:id} = req.params

        await deleteProductSize({id});

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}