const {deleteComment} = require('./../../services');
const {CustomError} = require('./../../error');

module.exports = async (req, res) => {
    try {
        const {comment_id: id} = req.params;

        await deleteComment(id)

        res.end();

    } catch (e) {
        throw new CustomError(e.status, e.message, e.code)
    }

}