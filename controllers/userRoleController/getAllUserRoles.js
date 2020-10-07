const {getAllUserRoles} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const userRoles = await getAllUserRoles();

        res.json(userRoles);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}