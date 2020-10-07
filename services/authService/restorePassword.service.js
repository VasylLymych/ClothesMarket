const {DB_TABLE_NAME} = require('../../constant');

const db = require('../../dataBase').getInstance();

module.exports = async (email,password) => {
    const userModel = db.getModel(DB_TABLE_NAME.USER);
    await userModel.update({
            password: password
        },
        {
            where: {
                email: email
            }
        })
};
