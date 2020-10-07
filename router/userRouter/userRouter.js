const userRouter = require('express').Router();
const {createUser, deleteUser, getAllActiveUsers, getAllBlockedUsers,updateUser} = require('../../controllers');
const {checkAccessToken, getUserFromAccessToken} = require('./../../middlewares')

userRouter.post('/', createUser);
userRouter.get('/allActiveUsers', getAllActiveUsers);
userRouter.get('/allBlockedUsers', getAllBlockedUsers);
userRouter.put('/',checkAccessToken,getUserFromAccessToken,updateUser)
userRouter.delete('/',checkAccessToken,getUserFromAccessToken,deleteUser);

module.exports = userRouter;
