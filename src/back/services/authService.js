const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { generateToken } = require("../config/jwt");

exports.register = async (username, password) => {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashed });
    return user;
};

exports.login = async (username, password) => {
    const user = await User.findOne({ where: { username } });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");

    const token = generateToken({ id: user.id, username: user.username });
    return { user, token };
};
