const purchaseRouter = require('express').Router();
const {
    acceptPurchase,
    cancelPurchase,
    getAllInProgressPurchases,
    getAllAcceptedPurchases,
    getAllCanceledPurchases,
} = require('../../controllers');
const {
    checkAccessToken,
    getUserFromAccessToken,
    checkIsAdmin,
    getPurchaseByParams,
} = require('./../../middlewares')

purchaseRouter.post('/accept/:purchase_id', checkAccessToken, getUserFromAccessToken, checkIsAdmin,
    getPurchaseByParams, acceptPurchase);
purchaseRouter.post('/cancel/:purchase_id', checkAccessToken, getUserFromAccessToken, checkIsAdmin,
    getPurchaseByParams, cancelPurchase);
purchaseRouter.get('/allInProgressPurchases', checkAccessToken, getUserFromAccessToken, checkIsAdmin,
    getAllInProgressPurchases);
purchaseRouter.get('/allAcceptedPurchases', checkAccessToken, getUserFromAccessToken, checkIsAdmin,
    getAllAcceptedPurchases);
purchaseRouter.get('/allCanceledPurchases', checkAccessToken, getUserFromAccessToken, checkIsAdmin,
    getAllCanceledPurchases)

module.exports = purchaseRouter;