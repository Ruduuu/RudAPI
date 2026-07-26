const Joi = require('joi');

module.exports = Joi.object({
    headline: Joi.string().allow('', null),
    bio: Joi.string().allow('', null),
    location: Joi.string().allow('', null),
    avatarUrl: Joi.string().uri().allow('', null),
    website: Joi.string().uri().allow('', null)
});