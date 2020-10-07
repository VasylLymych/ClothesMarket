const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const userStatusModel = db.getModel(DB_TABLE_NAME.USER_STATUS);

    const userStatuses = await userStatusModel.findAll({raw: true});

    return userStatuses
};