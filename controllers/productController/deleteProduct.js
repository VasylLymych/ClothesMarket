const {deleteProduct} = require('./../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res) => {
    try {
        const {product_id: id} = req.params;

        await deleteProduct(id)

        res.end();
    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }
}