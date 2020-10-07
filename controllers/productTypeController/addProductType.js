const {addProductType} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const {type} = req.body

        await addProductType({type});

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}