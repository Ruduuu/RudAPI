const Joi = require('joi');

module.exports = Joi.object({
    type: Joi.string().required(),
    url: Joi.string().uri().required()
});