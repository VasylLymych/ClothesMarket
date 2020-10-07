const Joi = require('joi');

module.exports = Joi.object().keys({
    firstName: Joi.string().min(2).max(64).required(),
    lastName: Joi.string().min(2).max(64).required(),
    age: Joi.number().integer().min(2).max(120).required(),
    gender_id: Joi.number().integer().min(1).max(2).required(),
    city: Joi.string().min(2).max(64).required(),
});
