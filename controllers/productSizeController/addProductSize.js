const {addProductSize} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const {size} = req.body

        await addProductSize({size});

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}