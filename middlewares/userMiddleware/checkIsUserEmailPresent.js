const {getUsersByParams} = require('./../../services')
const {CustomError} = require('./../../error');

module.exports = async (req, res, next) => {
    try {
        const {email} = req.body;

        const [isUserEmailPresent] = await getUsersByParams({email});

        if (isUserEmailPresent) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                CustomErrorData.BAD_REQUEST_USER_WITH_SUCH_EMAIL_IS_ALREADY_PRESENT.message,
                CustomErrorData.BAD_REQUEST_USER_WITH_SUCH_EMAIL_IS_ALREADY_PRESENT.code)
        }

        next();
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}

