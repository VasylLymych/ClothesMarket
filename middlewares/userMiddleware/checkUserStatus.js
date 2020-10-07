const {USER_STATUS, RESPONSE_STATUS_CODE} = require('./../../constant')
const {CustomError, CustomErrorData} = require('./../../error')

module.exports = (req, res, next) => {
    const {status_id} = req.user;

    if (status_id === USER_STATUS.BLOCKED) {
        throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
            CustomErrorData.FORBIDDEN_USER_IS_BLOCKED.message,
            CustomErrorData.FORBIDDEN_USER_IS_BLOCKED.code)
    }
    if (status_id === USER_STATUS.DELETED) {
        throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
            CustomErrorData.FORBIDDEN_USER_IS_DELETED.message,
            CustomErrorData.FORBIDDEN_USER_IS_DELETED.code)
    }

        next();
}