const {addProductSection} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const {section} = req.body

        await addProductSection({section});

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}