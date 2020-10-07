const authRouter = require('express').Router();
const {authUser, restorePassword, authAdmin, logout} = require('./../../controllers');
const {checkAccessToken}=require('./../../middlewares')

authRouter.post('/', authUser);
authRouter.post('/restorePassword', restorePassword);
authRouter.post('/admin', authAdmin);
authRouter.post('/logout',checkAccessToken,logout);

module.exports = authRouter


