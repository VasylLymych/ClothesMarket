
module.exports = class CustomError extends Error {

    constructor(
        status = 500,
        message,
        code = undefined
    ) {
        super();
        this.status = status;
        this.message = message;
        this.code = code;
        Error.captureStackTrace(this, this.constructor)
    }
};