const generateTokenAndSetCookie = require('../utils/generateToken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const cloudinary = require('cloudinary')
const register = async (req, res) => {
    try {
        const { username, email, password  } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username is already taken" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email is already taken" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newuser = new User({ username, email, password: hashedPassword });
        if (newuser) {
            generateTokenAndSetCookie(newuser._id, res);
            const saveuser = await newuser.save();
            res.status(201).json(saveuser);
        }
        else { res.status(400).json({ error: "Invalid user data" }); }

    } catch (error) {
        console.error(error);
    }
}
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            bio: user.bio,
        })
    } catch (error) {
        console.error(error);
    }
}
const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
module.exports = { register, login, logout };