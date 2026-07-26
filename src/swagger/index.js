const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'RudAPI',
            version: '1.0.0',
            description: 'Personal backbone API for future projects'
        },
        servers: [
            { url: 'http://localhost:3000', description: 'Local' }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'JWT token obtained from /v1/auth/login'
                }
            }
        },
        // Apply bearerAuth globally so Swagger knows everything can use it
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./src/routes/v1/*.js']
};

module.exports = swaggerJSDoc(options);