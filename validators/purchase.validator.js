const Joi = require('joi');

module.exports = Joi.object().keys({
    user_id: Joi.number().required(),
    status_id: Joi.number().required(),
    novaposhta_address: Joi.string().required(),
    phone_number: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    middle_name: Joi.string().required(),
});