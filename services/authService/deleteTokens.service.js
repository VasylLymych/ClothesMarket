const {DB_TABLE_NAME} = require('../../constant');

const db = require('../../dataBase').getInstance();

module.exports = async params => {

    const oAuthTokensModel = db.getModel(DB_TABLE_NAME.OAUTH_TOKEN);

    await oAuthTokensModel.destroy({where: params})
};
