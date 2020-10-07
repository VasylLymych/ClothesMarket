const {DB_TABLE_NAME} = require('../../constant');

const db = require('../../dataBase').getInstance();

module.exports = async (options) => {

    const cartModel = db.getModel(DB_TABLE_NAME.CART);

    await cartModel.destroy({where: options})
};
