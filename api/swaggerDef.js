const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        // API informations (required)
        title: 'Personal Portfolio', // Title (required)
        version: '3.0.0', // Version (required)
        description: 'TypeScript, Express, JWT Auth, Mongoose', // Description (optional)
    },
    servers: [
        { url: 'http://localhost:4000' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
