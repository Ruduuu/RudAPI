const db = require('../models');
const ApiError = require('../utils/ApiError');
const { hashPassword, comparePassword } = require('../services/hash.service');
const { signToken } = require('../services/token.service');

exports.register = async(req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const exists = await db.User.findOne({ where: { email } });
        if (exists) return next(new ApiError(409, 'Email already exists'));

        const user = await db.User.create({
            name,
            email,
            password: await hashPassword(password)
        });

        const token = signToken({ id: user.id, email: user.email, role: user.role });

        res.status(201).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (error) {
        next(error);
    }
};

exports.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await db.User.findOne({ where: { email } });
        if (!user) return next(new ApiError(401, 'Invalid credentials'));

        const ok = await comparePassword(password, user.password);
        if (!ok) return next(new ApiError(401, 'Invalid credentials'));

        const token = signToken({ id: user.id, email: user.email, role: user.role });

        res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (error) {
        next(error);
    }
};

exports.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await db.User.findOne({ where: { email } });
        if (!user) return next(new ApiError(401, 'Invalid credentials'));

        const ok = await comparePassword(password, user.password);
        if (!ok) return next(new ApiError(401, 'Invalid credentials'));

        const token = signToken({ id: user.id, email: user.email, role: user.role });
        res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
    } catch (error) {
        next(error);
    }
};