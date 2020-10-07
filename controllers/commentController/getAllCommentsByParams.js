const {getCommentsByParams} = require('../../services');
const {CustomError} = require('./../../error');
const {COMMENT_STATUS} = require('./../../constant');

module.exports = async (req, res, next) => {
    let allComments = [];
    let paginatedComments = [];
    let {limit, page} = req.query;
    const {product_id} = req.params
    let offset = (page - 1) * limit;

    try {

        allComments = await getCommentsByParams({
            where: {
                product_id,
                status_id: COMMENT_STATUS.ACTIVE
            },
            raw: true
        });

        const allCommentsAmount = allComments.length;
        let allPagesAmount = allCommentsAmount / limit;

        paginatedComments = await getCommentsByParams({
            where: {
                product_id,
                status_id: COMMENT_STATUS.ACTIVE
            },
            limit: +(limit),
            offset: +(offset),
            raw: true

        });

        res.json({allCommentsAmount,allPagesAmount,paginatedComments})
    } catch (e) {
        next(new CustomError(e.status, e.message, e.code))
    }

};
