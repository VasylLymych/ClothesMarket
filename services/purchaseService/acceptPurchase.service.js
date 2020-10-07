const {DB_TABLE_NAME, PURCHASE_STATUS, PRODUCT_STATUS} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async (purchase_id, product_id) => {
    const productModel = db.getModel(DB_TABLE_NAME.PRODUCT);
    const purchaseModel = db.getModel(DB_TABLE_NAME.PURCHASE);
    const cartModel = db.getModel(DB_TABLE_NAME.CART);

    await Promise.all([productModel.update({
            status_id: PRODUCT_STATUS.SOLD
        },
        {
            where: {
                id: product_id
            }
        }),

        purchaseModel.update(
            {
                status_id: PURCHASE_STATUS.ACCEPTED
            },
            {
                where: {
                    id: purchase_id
                }
            }
        ),
        cartModel.destroy({
            where: {product_id}
        })])
};