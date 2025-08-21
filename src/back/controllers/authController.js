const authService = require("../services/authService");

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body.username, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { user, token } = await authService.login(req.body.username, req.body.password);
        res.json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
