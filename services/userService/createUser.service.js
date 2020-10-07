const {DB_TABLE_NAME} = require('../../constant');

const db = require('../../dataBase').getInstance();

module.exports = async user => {
    const userModel = db.getModel(DB_TABLE_NAME.USER);

    await userModel.create(user)
};
