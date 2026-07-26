const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const db = {};
db.Sequelize = require('sequelize');
db.sequelize = sequelize;
db.User = require('./user.model')(sequelize, DataTypes);
db.Profile = require('./profile.model')(sequelize, DataTypes);
db.Project = require('./project.model')(sequelize, DataTypes);
db.Skill = require('./skill.model')(sequelize, DataTypes);
db.Link = require('./link.model')(sequelize, DataTypes);
db.Note = require('./note.model')(sequelize, DataTypes);

db.User.hasOne(db.Profile, { foreignKey: 'userId', as: 'profile' });
db.Profile.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

db.User.hasMany(db.Project, { foreignKey: 'userId', as: 'projects' });
db.Project.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

db.User.hasMany(db.Skill, { foreignKey: 'userId', as: 'skills' });
db.Skill.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

db.User.hasMany(db.Link, { foreignKey: 'userId', as: 'links' });
db.Link.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

db.User.hasMany(db.Note, { foreignKey: 'userId', as: 'notes' });
db.Note.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

module.exports = db;