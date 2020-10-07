const userRoleRouter = require('express').Router();
const {getAllUserRoles} = require('../../controllers');

userRoleRouter.get('/', getAllUserRoles)

module.exports = userRoleRouter;