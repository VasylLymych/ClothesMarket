const Joi = require('joi');
const {createUserValidator} = require('./../../validators');
const {CustomError} = require('./../../error');

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        const validatedUser = Joi.validate(user, createUserValidator);

        if (validatedUser.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedUser.error.details[0].message)
        }

        next();
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}