const Joi = require('joi');
const {updateReplyCommentByParams} = require('./../../services');
const {CustomError} = require('./../../error');
const {commentValidator} = require('./../../validators');
const {RESPONSE_STATUS_CODE} = require('./../../constant');

module.exports = async (req, res) => {
    try {
        const {id} = req.comment;
        const replyComment = req.body;

        const validatedComment = await Joi.validate(replyComment, commentValidator);

        replyComment.date = new Date();

        if (validatedComment.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedComment.error.details[0].message)
        }

        await updateReplyCommentByParams(replyComment, {where: {id}})

        res.end();
    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }

}