const db = require('../models');

exports.list = async(req, res) => res.json({ items: await db.Project.findAll({ where: { userId: req.user.id } }) });
exports.create = async(req, res) => res.status(201).json({ item: await db.Project.create({...req.body, userId: req.user.id }) });
exports.update = async(req, res) => {
    const item = await db.Project.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.update(req.body);
    res.json({ item });
};
exports.remove = async(req, res) => {
    const item = await db.Project.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.json({ message: 'Deleted' });
};