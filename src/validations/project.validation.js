const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow('', null),
    techStack: Joi.array().items(Joi.string()).default([]),
    repoUrl: Joi.string().uri().allow('', null),
    liveUrl: Joi.string().uri().allow('', null),
    featured: Joi.boolean().default(false)
});