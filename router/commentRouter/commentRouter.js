const commentRouter = require('express').Router();
const {
    checkAccessToken,
    getUserFromAccessToken,
    getCommentByParams,
    checkIsUsersComment,
    checkIsUsersCommentOrIsAdmin,
    getProductByParams,
    checkIsCommentPresent,
    checkIsReplyCommentPresent,
    getReplyCommentByParams
} = require('./../../middlewares');
const {
    createComment,
    updateComment,
    deleteComment,
    createReplyComment,
    updateReplyComment,
    deleteReplyComment,
    getAllCommentsByParams,
    getAllReplyCommentsByParams
} = require('./../../controllers')

commentRouter.post('/:product_id', checkAccessToken, getUserFromAccessToken, getProductByParams, createComment);
commentRouter.put('/:comment_id', checkAccessToken, getUserFromAccessToken, checkIsCommentPresent,
    getCommentByParams, checkIsUsersComment, updateComment);
commentRouter.delete('/:comment_id', checkAccessToken, getUserFromAccessToken, checkIsCommentPresent,
    getCommentByParams, checkIsUsersCommentOrIsAdmin, deleteComment);
commentRouter.post('/replyComments/:comment_id', checkAccessToken, getUserFromAccessToken, checkIsCommentPresent,
    createReplyComment);
commentRouter.put('/replyComments/:comment_id', checkAccessToken, getUserFromAccessToken,
    checkIsReplyCommentPresent, getReplyCommentByParams, checkIsUsersComment, updateReplyComment);
commentRouter.delete('/replyComments/:comment_id', checkAccessToken, getUserFromAccessToken,
    checkIsReplyCommentPresent, getReplyCommentByParams, checkIsUsersCommentOrIsAdmin, deleteReplyComment);
commentRouter.get('/:product_id',getAllCommentsByParams);
commentRouter.get('/replyComments/:comment_id',getAllReplyCommentsByParams);
module.exports = commentRouter


