const http = require("http");
const WebSocket = require("ws");
require("dotenv").config();
const app = require("./app");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket 연결
wss.on("connection", (ws) => {
    console.log("🔗 Client connected");

    ws.on("message", (message) => {
        console.log("📩 Received:", message.toString());
        ws.send("Echo: " + message.toString());
    });

    ws.on("close", () => console.log("❌ Client disconnected"));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
