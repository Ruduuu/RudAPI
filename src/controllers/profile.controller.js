const db = require('../models');

exports.getMe = async(req, res, next) => {
    const profile = await db.Profile.findOne({ where: { userId: req.user.id } });
    res.json({ profile });
};

exports.upsertMe = async(req, res, next) => {
    const [profile] = await db.Profile.upsert({...req.body, userId: req.user.id }, { returning: true });
    res.json({ profile });
};