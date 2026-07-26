const db = require('../models');
exports.list = async(req, res) => res.json({ items: await db.Note.findAll({ where: { userId: req.user.id } }) });
exports.create = async(req, res) => res.status(201).json({ item: await db.Note.create({...req.body, userId: req.user.id }) });
exports.remove = async(req, res) => res.json({ message: 'Deleted' });