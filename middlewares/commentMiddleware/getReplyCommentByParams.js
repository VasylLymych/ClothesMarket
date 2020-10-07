const {CustomError} = require('./../../error')
const {getReplyCommentsByParams} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {comment_id: id} = req.params;

        const [comment] = await getReplyCommentsByParams({where: {id}, raw: true});
        req.comment = comment;
        next();
    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }
}