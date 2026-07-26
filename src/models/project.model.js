module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Project', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        userId: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        techStack: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
        repoUrl: { type: DataTypes.STRING },
        liveUrl: { type: DataTypes.STRING },
        featured: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, { timestamps: true });
};