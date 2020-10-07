const Joi = require('joi');
const {passwordHasher, passwordChecker} = require('./../../helpers');
const {changePasswordValidator} = require('./../../validators')
const {CustomError, CustomErrorData} = require('./../../error');
const {RESPONSE_STATUS_CODE} = require('./../../constant');
const {getOldPassword, changePassword} = require('./../../services')

module.exports = async (req, res, next) => {
    try {
        const {id} = req.user;
        const {oldPassword, newPassword} = req.body;
        const changePasswordData = req.body;

        const validatedChangePasswordData = await Joi.validate(changePasswordData, changePasswordValidator);

        if (validatedChangePasswordData.error)
            throw new CustomError(RESPONSE_STATUS_CODE.FORBIDDEN,
                validatedChangePasswordData.error.details[0].message)

        const oldPasswordFromUserModel = await getOldPassword({id});

        await passwordChecker(oldPasswordFromUserModel, oldPassword)


        if (oldPassword === newPassword) {
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_OLD_AND_NEW_PASSWORDS_ARE_THE_SAME.message,
                CustomErrorData.BAD_REQUEST_OLD_AND_NEW_PASSWORDS_ARE_THE_SAME.code)
        }

        const hashedNewPassword = await passwordHasher(newPassword);

        await changePassword(hashedNewPassword, id)

        res.end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
