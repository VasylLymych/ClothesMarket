module.exports.checkAccessToken = require('./authMiddleware/checkAccessToken');
module.exports.getUserFromAccessToken = require('./authMiddleware/getUserFromAccessToken');
module.exports.checkIsAdmin = require('./adminMiddleware/checkIsAdmin');
module.exports.checkIsSuperAdmin = require('./adminMiddleware/checkIsSuperAdmin');
module.exports.getCommentByParams = require('./commentMiddleware/getCommentByParams');
module.exports.checkIsUsersComment = require('./commentMiddleware/checkIsUsersComment');
module.exports.getProductByParams = require('./productMiddleware/getProductByParams');
module.exports.checkIsCommentPresent = require('./commentMiddleware/checkIsCommentPresent');
module.exports.checkIsReplyCommentPresent = require('./commentMiddleware/checkIsReplyCommentPresent');
module.exports.getReplyCommentByParams = require('./commentMiddleware/getReplyCommentByParams');
module.exports.checkIsUsersCommentOrIsAdmin = require('./commentMiddleware/checkIsUsersCommentOrIsAdmin');
module.exports.getPurchaseByParams = require('./purchaseMiddleware/getPurchaseByParams');
module.exports.createUserDataValidation = require('./userMiddleware/createUserDataValidation');
module.exports.checkIsUserEmailPresent = require('./userMiddleware/checkIsUserEmailPresent');
