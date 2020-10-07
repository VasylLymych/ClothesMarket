const {deleteProductSection} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const {product_section_id:id} = req.params
        console.log(id);
        await deleteProductSection({id});

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}