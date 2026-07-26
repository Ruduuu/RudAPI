module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Profile', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        userId: { type: DataTypes.UUID, allowNull: false },
        headline: { type: DataTypes.STRING },
        bio: { type: DataTypes.TEXT },
        location: { type: DataTypes.STRING },
        avatarUrl: { type: DataTypes.STRING },
        website: { type: DataTypes.STRING }
    }, { timestamps: true });
};