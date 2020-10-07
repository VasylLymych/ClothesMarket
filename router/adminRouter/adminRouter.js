const adminRouter = require('express').Router();
const {createAdmin, blockUser, blockAdmin, deleteUser} = require('../../controllers');
const {checkAccessToken, getUserFromAccessToken, checkIsAdmin, checkIsSuperAdmin} = require('./../../middlewares');

adminRouter.post('/', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin, createAdmin);
adminRouter.put('/block/:id', checkAccessToken, getUserFromAccessToken, checkIsAdmin, blockUser);
adminRouter.put('/blockAdmin/:id', checkAccessToken, getUserFromAccessToken, checkIsSuperAdmin, blockAdmin);
adminRouter.delete('/', checkAccessToken, getUserFromAccessToken, deleteUser)

module.exports = adminRouter;
