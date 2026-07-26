const jwt = require('jsonwebtoken');
const ApiError = require('../utils/ApiError');

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) return next(new ApiError(401, 'Unauthorized'));

    try {
        const token = auth.split(' ')[1];
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        next(new ApiError(401, 'Invalid token'));
    }
};