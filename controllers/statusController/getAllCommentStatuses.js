const {getAllCommentStatuses} = require('../../services');
const {CustomError} = require('./../../error')

module.exports = async (req, res, next) => {
    try {
        const commentStatuses = await getAllCommentStatuses();

        res.json(commentStatuses);
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}