const {USER_ROLE, RESPONSE_STATUS_CODE} = require('./../../constant');
const {CustomError, CustomErrorData} = require('./../../error');

module.exports = (req, res, next) => {
    const {role_id} = req.user;
    if (role_id === USER_ROLE.USER) {
        throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
            CustomErrorData.BAD_REQUEST_YOU_ARE_NOT_ADMIN.message,
            CustomErrorData.BAD_REQUEST_YOU_ARE_NOT_ADMIN.code)
    }

    next();

}