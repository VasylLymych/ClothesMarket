const {getUserFromTokensByParams} = require('../../services');
const {CustomError, CustomErrorData} = require('../../error');
const {RESPONSE_STATUS_CODE} = require('../../constant');

module.exports = async (req, res, next) => {
    try {
        const accessToken = req.get('Authorization');

        const [userFromToken] = await getUserFromTokensByParams({accessToken});

        if (!userFromToken) {
            return next(new CustomError(
                RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_USER_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_USER_NOT_PRESENT.code,
            ));
        }

        req.user = userFromToken;
        next()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}