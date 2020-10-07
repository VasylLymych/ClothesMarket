const {updateUserByParams} = require('./../../services');
const {CustomError} = require('./../../error');
const {RESPONSE_STATUS_CODE} = require('./../../constant');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.user;
        const updateUserData = req.body;

        await updateUserByParams(updateUserData, id)

        res.status(RESPONSE_STATUS_CODE.CREATED).end();
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}