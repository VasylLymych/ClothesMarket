const {createUser, sendEmailForRegister} = require('../../services');
const {passwordHasher} = require('./../../helpers');
const {CustomError} = require('./../../error');
const {RESPONSE_STATUS_CODE, USER_ROLE, USER_STATUS} = require('./../../constant');

module.exports = async (req, res, next) => {
    try {
        const user = req.body;
        const {email, firstName, lastName} = user;
        user.role_id = USER_ROLE.ADMIN;
        user.status_id = USER_STATUS.ACTIVE;

        user.password = await passwordHasher(user.password);
        await createUser(user);
        await sendEmailForRegister(email, firstName, lastName);

        res.status(RESPONSE_STATUS_CODE.CREATED).end()
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }
}
