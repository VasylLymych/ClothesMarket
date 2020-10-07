const {deleteTokens} = require('./../../services');

const {CustomError} = require('./../../error');

const {RESPONSE_STATUS_CODE} = require('./../../constant');

module.exports = async (req, res) => {
    try {
        const accessToken = req.get('Authorization');
        await deleteTokens({where:{accessToken}})
        res.end();

    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }

}