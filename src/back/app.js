const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const memberRoutes = require('./routes/memberRoutes');
const roomRoutes = require('./routes/roomRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(memberRoutes);
app.use(roomRoutes);

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 기본 헬스체크
app.get('/', (req, res) => {
    res.json({ code: 200, message: '요청이 성공적으로 처리되었습니다.', data: { status: 'ok' } });
});

module.exports = app;