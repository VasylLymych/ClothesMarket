const {getAllGenders} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const genders = await getAllGenders();

        res.json(genders);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}