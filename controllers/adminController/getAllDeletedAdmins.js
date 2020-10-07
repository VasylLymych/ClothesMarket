const {getUsersByParams} = require('../../services');
const {CustomError} = require('./../../error');
const {USER_ROLE, USER_STATUS} = require('./../../constant')

module.exports = async (req, res, next) => {
    try {
        let allUsers = [];
        let paginatedUsers = [];
        let {limit, page} = req.query;
        let offset = (page - 1) * limit;
        let allUsersAmount = 0;
        let allPagesAmount = 0;

        allUsers = await getUsersByParams(
            {status_id: USER_STATUS.DELETED, role_id: USER_ROLE.ADMIN}
        );


        allUsersAmount = allUsers.length;
        allPagesAmount = allUsersAmount / limit;

        paginatedUsers = await getUsersByParams(
            {status_id: USER_STATUS.ACTIVE, role_id: USER_ROLE.ADMIN},
            limit,
            offset
        );

        res.json({allUsersAmount, allPagesAmount, paginatedUsers})
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
