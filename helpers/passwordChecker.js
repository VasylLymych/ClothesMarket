const bcrypt = require('bcrypt');

const {CustomError, CustomErrorData} = require('../error');
const {RESPONSE_STATUS_CODE} = require('../constant');

module.exports = async (hashedPassword, password) => {

    let checkedPassword = await bcrypt.compare(password, hashedPassword);

    if (checkedPassword === false) {
        throw new CustomError(
            RESPONSE_STATUS_CODE.BAD_REQUEST,
            CustomErrorData.BAD_REQUEST_WRONG_PASSWORD.message,
            CustomErrorData.BAD_REQUEST_WRONG_PASSWORD.code,
        )
    }
}