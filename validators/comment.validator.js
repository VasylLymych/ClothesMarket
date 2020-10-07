const Joi = require('joi');

module.exports = Joi.object().keys({
    comment: Joi.string().min(1).required(),
});
