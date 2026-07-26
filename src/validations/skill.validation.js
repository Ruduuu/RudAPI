const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().allow('', null),
    level: Joi.number().integer().min(1).max(10).default(1)
});