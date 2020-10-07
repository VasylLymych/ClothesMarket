const Joi=require('joi');
const {PASSWORD_REGEX}=require('./../constant')

module.exports=Joi.object().keys({
    oldPassword:Joi.string().min(8).max(16).regex(PASSWORD_REGEX),
    newPassword:Joi.string().min(8).max(16).regex(PASSWORD_REGEX)
})