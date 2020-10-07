const Joi = require('joi');
const {commentValidator} = require('../../validators');
const {CustomError} = require('./../../error');
const {RESPONSE_STATUS_CODE, COMMENT_STATUS} = require('./../../constant');
const {createComment} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {id} = req.user;
        const {product_id} = req.params;
        const commentValue = req.body;
        const validatedComment = Joi.validate(commentValue, commentValidator);

        if (validatedComment.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedComment.error.details[0].message)
        }

        const commentData = {
            user_id: id,
            product_id: product_id,
            comment: commentValue.comment,
            status_id: COMMENT_STATUS.ACTIVE
        }

        await createComment(commentData)

        res.status(RESPONSE_STATUS_CODE.CREATED).end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
