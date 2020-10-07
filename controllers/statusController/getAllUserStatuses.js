const {getAllUserStatuses} = require('../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res, next) => {
    try {
        const userStatuses = await getAllUserStatuses();

        res.json(userStatuses);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}
