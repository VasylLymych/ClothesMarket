const {DB_TABLE_NAME} = require('../../constant');

const db = require('../../dataBase').getInstance();

module.exports = async (tokens) => {
    console.log(tokens);
    const oAuthTokensModel = db.getModel(DB_TABLE_NAME.OAUTH_TOKEN);

    await oAuthTokensModel.create(tokens)
};
