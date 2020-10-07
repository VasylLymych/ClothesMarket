const {verifyAccessToken} = require('../../helpers');
const {CustomError, CustomErrorData} = require('../../error');
const {RESPONSE_STATUS_CODE} = require('../../constant');

module.exports = async (req, res, next) => {
    try {
        const accessToken = req.get('Authorization');

        if (!accessToken) {
            return next(new CustomError(
                RESPONSE_STATUS_CODE.UNAUTHORIZED,
                CustomErrorData.UNAUTHORIZED_USER.message,
                CustomErrorData.UNAUTHORIZED_USER.code,
            ));
        }

        await verifyAccessToken(accessToken);

        next()

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))

    }

};