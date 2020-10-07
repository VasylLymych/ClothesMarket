const Joi = require('joi');
const {PASSWORD_REGEX} = require('./../constant')
module.exports = Joi.object().keys({
    firstName: Joi.string().min(2).max(64).required(),
    lastName: Joi.string().min(2).max(64).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(PASSWORD_REGEX).min(8).max(16).required(),
    age: Joi.number().integer().min(2).max(120).required(),
    city: Joi.string().min(2).max(64).required(),
    gender_id: Joi.number().integer().min(1).max(2).required(),
});
