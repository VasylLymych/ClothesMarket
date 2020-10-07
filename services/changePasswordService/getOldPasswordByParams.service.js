const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async params => {
    const userModel = db.getModel(DB_TABLE_NAME.USER);
    const [user] = await userModel.findAll({where: params, raw: true});

    return user.password
};