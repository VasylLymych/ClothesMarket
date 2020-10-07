const {deleteUser, deleteTokens} = require('./../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.user;

        await deleteUser(id);
        await deleteTokens({user_id: id})

        res.end();
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

}