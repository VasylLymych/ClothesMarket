const {DB_TABLE_NAME} = require('../../constant');

const db = require('../../dataBase').getInstance();

module.exports = async token => {

    const tokenModel = db.getModel(DB_TABLE_NAME.OAUTH_TOKEN);
    const userModel = db.getModel(DB_TABLE_NAME.USER);

    const [{user_id:id}] = await tokenModel.findAll({
        where: token,
        attributes: ['user_id'],
        raw: true
    });

    const user = await userModel.findAll({
        where: {id},
        attributes: ['id', 'firstName', 'status_id', 'role_id'],
        raw: true
    });

    return user
};