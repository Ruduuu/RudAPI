module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Note', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        userId: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        tags: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] }
    }, { timestamps: true });
};