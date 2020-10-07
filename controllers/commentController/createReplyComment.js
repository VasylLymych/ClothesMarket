const Joi = require('joi');
const {commentValidator} = require('../../validators');
const {CustomError} = require('./../../error');
const {RESPONSE_STATUS_CODE, COMMENT_STATUS} = require('./../../constant');
const {createReplyComment} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {id} = req.user;
        const {comment_id} = req.params;
        const replyCommentValue = req.body;
        const validatedComment = Joi.validate(replyCommentValue, commentValidator);

        if (validatedComment.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedComment.error.details[0].message)
        }

        const replyCommentData = {
            user_id: id,
            comment_id: comment_id,
            comment: replyCommentValue.comment,
            status_id: COMMENT_STATUS.ACTIVE
        }

        await createReplyComment(replyCommentData)

        res.status(RESPONSE_STATUS_CODE.CREATED).end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
