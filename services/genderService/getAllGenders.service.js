const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async () => {
    const genderModel = db.getModel(DB_TABLE_NAME.GENDER);

    const genders = await genderModel.findAll({raw: true,});

    return genders
};