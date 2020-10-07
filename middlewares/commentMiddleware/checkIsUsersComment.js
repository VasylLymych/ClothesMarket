const {USER_ROLE, RESPONSE_STATUS_CODE} = require('./../../constant');
const {CustomError, CustomErrorData} = require('./../../error');

module.exports = (req, res, next) => {
    try {
        const {user_id} = req.comment;
        const {id} = req.user;

        if (user_id !== id) {
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_COMMENT_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_COMMENT_NOT_PRESENT.code)
        }

        next();
    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }
}