const jwt = require('jsonwebtoken');

const {
    JWT_SECRET_ACCESS,
    JWT_SECRET_REFRESH,
    ACCESS_TOKEN_LIFE,
    REFRESH_TOKEN_LIFE
} = require('./../config/configs')

module.exports = () => {
    const accessToken = jwt.sign({}, JWT_SECRET_ACCESS, {expiresIn: ACCESS_TOKEN_LIFE});
    const refreshToken = jwt.sign({}, JWT_SECRET_REFRESH, {expiresIn: REFRESH_TOKEN_LIFE});

    return {
        accessToken,
        refreshToken
    }
}