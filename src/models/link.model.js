module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Link', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        userId: { type: DataTypes.UUID, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        url: { type: DataTypes.STRING, allowNull: false }
    }, { timestamps: true });
};