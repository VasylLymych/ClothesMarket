const {RESPONSE_STATUS_CODE, COMMENT_STATUS} = require('./../../constant');
const {CustomError, CustomErrorData} = require('./../../error');
const {getCommentsByParams} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {comment_id: id} = req.params;

        const [comment] = await getCommentsByParams({where: {id}, raw: true});

        if (!comment || comment.status === COMMENT_STATUS.DELETED) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                CustomErrorData.BAD_REQUEST_COMMENT_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_COMMENT_NOT_PRESENT.code)
        }

        next();
    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }
}