require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

const start = async() => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');
        app.listen(PORT, () => console.log(`RudAPI running on port ${PORT}`));
    } catch (error) {
        console.error('Unable to start server:', error.message);
        process.exit(1);
    }
};

start();