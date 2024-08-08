const express = require('express');
const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authMiddleware } = require("../middleware");
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const signupBody = zod.object({
    username: zod.string(),
    password: zod.string()
});

router.post("/register", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
    });
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, secret);

    res.json({
        message: "User created successfully",
        token: token,
    });
});

const signinBody = zod.object({
    username: zod.string(),
    password: zod.string()
});

router.post("/login", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }

    const user = await User.findOne({
        username: req.body.username
    });

    if (user) {
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({
                userId: user._id
            }, secret);

            res.json({
                token: token
            });
            return;
        }
    }

    res.status(411).json({
        message: "Error while logging in"
    });
});

router.get("/allusers", authMiddleware, async (req, res) => {
    const usersData = await User.find();
    const usernames = usersData.map(user => user.username);

    res.json({
        usernames,
        usersData
    });
});

module.exports = router;
