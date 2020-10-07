const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const userRoleModel = db.getModel(DB_TABLE_NAME.USER_ROLE);

    const userRoles = await userRoleModel.findAll({raw: true,});

    return userRoles
};