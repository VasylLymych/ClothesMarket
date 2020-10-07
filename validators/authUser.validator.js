const Joi = require('joi');
const {PASSWORD_REGEX} = require('./../constant')
module.exports = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(PASSWORD_REGEX).min(8).max(16).required(),
});
