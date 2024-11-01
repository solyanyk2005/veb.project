// auth.js
import express from 'express';
import { addUser, findUser } from './db.js';
const router = express.Router();

router.post('/register', (req, res) => {
    const { name, password } = req.body;
    const token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    addUser(name, password, token, (err) => {
        if (err) return res.status(500).json({ error: "User already exists." });
        res.json({ token });
    });
});

router.post('/login', (req, res) => {
    const { name, password } = req.body;
    findUser(name, password, (err, user) => {
        if (err || !user) return res.status(401).json({ error: "Invalid credentials." });
        res.json({ token: user.token });
    });
});

export default router;
