const {getReplyCommentsByParams} = require('../../services');
const {CustomError} = require('./../../error');
const {COMMENT_STATUS} = require('./../../constant');

module.exports = async (req, res, next) => {
    let allReplyComments = [];
    let paginatedReplyComments = [];
    let {limit, page} = req.query;
    const {comment_id} = req.params;
    let offset = (page - 1) * limit;

    try {
        allReplyComments = await getReplyCommentsByParams({
            where: {
                comment_id,
                status_id: COMMENT_STATUS.ACTIVE
            },
            raw: true
        });

        const allReplyCommentsAmount = allReplyComments.length;
        let allPagesAmount = allReplyCommentsAmount / limit;

        paginatedReplyComments = await getReplyCommentsByParams({
            where: {
                comment_id,
                status_id: COMMENT_STATUS.ACTIVE
            },
            limit: +(limit),
            offset: +(offset),
            raw: true

        });

        res.json({allReplyCommentsAmount,allPagesAmount,paginatedReplyComments})
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
