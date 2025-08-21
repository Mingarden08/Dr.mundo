const express = require("express");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/auth", authRoutes);

// DB 연결 확인
sequelize.sync({ force: false })
    .then(() => console.log("✅ Database synced"))
    .catch(err => console.error("❌ DB Error:", err));

module.exports = app;
