import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "VideoTube API",
            version: "1.0.0",
            description: "VideoTube Backend API Documentation",
        },
        servers: [
            {
                url: "https://videotube-backend-vgr5.onrender.com/api/v1",
                description: "Production Server",
            },
            {
                url: "http://localhost:8000/api/v1",
                description: "Local Server",
            },
        ],
    },

    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;