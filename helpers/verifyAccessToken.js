const jwt = require('jsonwebtoken');
const {JWT_SECRET_ACCESS} = require('./../config/configs');
const {RESPONSE_STATUS_CODE} = require('./../constant')
const {CustomError, CustomErrorData} = require('./../error');

module.exports = async token => {
    try {
        await jwt.verify(token, JWT_SECRET_ACCESS);
    } catch (e) {
        throw new CustomError(
            RESPONSE_STATUS_CODE.UNAUTHORIZED,
            CustomErrorData.UNAUTHORIZED_BAD_ACCESS_TOKEN.message,
            CustomErrorData.UNAUTHORIZED_BAD_ACCESS_TOKEN.code)
    }
}