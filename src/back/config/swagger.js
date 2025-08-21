const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "DR.MUNDO API",
            version: "1.0.0",
            description: "API documentation with Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000", // .env PORT 맞춰서 수정
            },
        ],
    },
    apis: ["./src/back/routes/*.js"], // 라우터 경로 (JSDoc 주석 읽어옴)
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
