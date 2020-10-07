const Joi = require('joi');

const {getRandomPassword, passwordHasher} = require('./../../helpers');

const {restorePassword, sendEmailForPasswordRestoring} = require('../../services');

const {restorePasswordValidator} = require('./../../validators')

const {CustomError, CustomErrorData} = require('./../../error');

const {RESPONSE_STATUS_CODE} = require('./../../constant');

module.exports = async (req, res) => {
    try {
        const {email} = req.body;
        if (!email) {
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_NO_EMAIL.message,
                CustomErrorData.BAD_REQUEST_NO_EMAIL.code)
        }

        const validatedEmail = await Joi.validate(email, restorePasswordValidator);

        if (validatedEmail.error) {
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedEmail.error.details[0].message)
        }

        const password = getRandomPassword();

        const hashedPassword = await passwordHasher(password);
        await sendEmailForPasswordRestoring(email, password);
        await restorePassword(email, hashedPassword)
        res.status(RESPONSE_STATUS_CODE.CREATED).end()
    } catch (e) {
        new CustomError(e.status, e.message, e.code)
    }

};
