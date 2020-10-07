const Joi = require('joi');
const {CustomError} = require('./../../error');
const {updateUserValidator} = require('./../../validators')

module.exports = async (req, res, next) => {
    try {
        const updateUserData = req.body;

        const validatedUser = await Joi.validate(updateUserData, updateUserValidator);

        if (validatedUser.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedUser.error.details[0].message)
        }

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}
