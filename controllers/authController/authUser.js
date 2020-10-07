const Joi = require('joi');
const {passwordChecker, tokenCreator} = require('./../../helpers');
const {getUserByParams, createTokens} = require('./../../services');
const {CustomError, CustomErrorData} = require('./../../error');
const {authUserValidator} = require('./../../validators')
const {RESPONSE_STATUS_CODE, USER_ROLE, USER_STATUS} = require('./../../constant')

module.exports = async (req, res) => {
    const {email, password} = req.body;
    const credentials = req.body
    const validatedUser = await Joi.validate(credentials, authUserValidator);
    if (validatedUser.error) {
        throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
            validatedUser.error.details[0].message)
    }
    const [user] = await getUserByParams({where: {email}, raw: true});

    if (!user || user.role_id !== USER_ROLE.USER || user.status_id === USER_STATUS.DELETED) {
        throw new CustomError(
            RESPONSE_STATUS_CODE.BAD_REQUEST,
            CustomErrorData.BAD_REQUEST_USER_NOT_PRESENT.message,
            CustomErrorData.BAD_REQUEST_USER_NOT_PRESENT.code)
    }
    if (user.status_id === USER_STATUS.BLOCKED) {
        throw new CustomError(
            RESPONSE_STATUS_CODE.BAD_REQUEST,
            CustomErrorData.FORBIDDEN_USER_IS_BLOCKED.message,
            CustomErrorData.FORBIDDEN_USER_IS_BLOCKED.code
        );
    }
    await passwordChecker(user.password, password);
    const tokens = tokenCreator();
    const {accessToken, refreshToken} = tokens;
    tokens.user_id = user.id;
    await createTokens(tokens);
    res.json({accessToken, refreshToken}).end();

}



