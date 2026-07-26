const ApiError = require('../utils/ApiError');

module.exports = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) return next(new ApiError(400, error.details.map(d => d.message).join(', ')));
    next();
};