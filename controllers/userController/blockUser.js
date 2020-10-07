const {blockUser, deleteTokens, getUsersByParams} = require('../../services');
const {CustomError, CustomErrorData} = require('../../error');
const {RESPONSE_STATUS_CODE, USER_ROLE, USER_STATUS} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const {user_id: id} = req.params;

        const [user] = await getUsersByParams({id});

        if (!user || user.role_id !== USER_ROLE.USER || user.status_id === USER_STATUS.DELETED)
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_USER_IS_NOT_PRESENT.message,
                CustomErrorData.BAD_REQUEST_USER_IS_NOT_PRESENT.code)
        if (user.status_id === USER_STATUS.BLOCKED)
            throw new CustomError(RESPONSE_STATUS_CODE.BAD_REQUEST,
                CustomErrorData.BAD_REQUEST_USER_IS_ALREADY_BLOCKED.message,
                CustomErrorData.BAD_REQUEST_USER_IS_ALREADY_BLOCKED.code)

        await blockUser({id});
        await deleteTokens({id});

        res.end();

    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}