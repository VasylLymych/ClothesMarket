const passwordRouter = require('express').Router();
const {checkAccessToken, getUserFromAccessToken} = require('./../../middlewares');
const {changePassword} = require('./../../controllers')

passwordRouter.put('/', checkAccessToken, getUserFromAccessToken, changePassword)

module.exports = passwordRouter;


