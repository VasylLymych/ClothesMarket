const {DB_TABLE_NAME} = require('./../../constant');
const db = require('./../../dataBase').getInstance()

module.exports = async product => {
    const purchaseModel = db.getModel(DB_TABLE_NAME.PURCHASE);
    const cartModel = db.getModel(DB_TABLE_NAME.CART);
    const {user_id,product_id}=product;

    await purchaseModel.create(product);
    await cartModel.destroy({where:{user_id,product_id}})
}