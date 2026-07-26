const db = require('../models');
exports.list = async(req, res) => res.json({ items: await db.Skill.findAll({ where: { userId: req.user.id } }) });
exports.create = async(req, res) => res.status(201).json({ item: await db.Skill.create({...req.body, userId: req.user.id }) });
exports.remove = async(req, res) => res.json({ message: 'Deleted' });