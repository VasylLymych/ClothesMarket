const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async (password, id) => {
    const userModel = db.getModel(DB_TABLE_NAME.USER);
    await userModel.update({password},
        {
            where: {
                id
            }
        });

};