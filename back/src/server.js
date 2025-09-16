require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.sync({ alter: true }); // 개발 중이면 alter:true, 운영이면 false 또는 migration 사용
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('DB 연결 실패', err);
        process.exit(1);
    }
})();
