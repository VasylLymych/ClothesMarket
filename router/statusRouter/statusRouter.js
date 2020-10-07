const statusRouter = require('express').Router();

const {getAllPurchaseStatuses,
    getAllCommentStatuses,
    getAllUserStatuses,
    getAllProductStatuses} = require('../../controllers');

statusRouter.get('/purchaseStatuses', getAllPurchaseStatuses)
statusRouter.get('/userStatuses', getAllUserStatuses)
statusRouter.get('/productStatuses', getAllProductStatuses)
statusRouter.get('/commentStatuses', getAllCommentStatuses)

module.exports = statusRouter;
