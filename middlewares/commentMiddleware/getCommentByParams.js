const {COMMENT_STATUS, RESPONSE_STATUS_CODE} = require('./../../constant')
const {CustomError, CustomErrorData} = require('./../../error')
const {getCommentByParams} = require('./../../services')

module.exports = async (req, res, next) => {
    try {

        const {comment_id: id} = req.params;

        const [comment] = await getCommentByParams({where: {id}, raw: true});

        req.comment = comment;
        next();
    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }
}