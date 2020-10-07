const {DB_TABLE_NAME, USER_STATUS} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async params => {
    const userModel = db.getModel(DB_TABLE_NAME.USER);

    await userModel.update({
            status_id: USER_STATUS.ACTIVE
        },
        {
            where: params
        });

};