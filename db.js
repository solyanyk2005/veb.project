// db.js
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./users.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        password TEXT,
        token TEXT
    )`);
});

function addUser(name, password, token, callback) {
    const query = `INSERT INTO users (name, password, token) VALUES (?, ?, ?)`;
    db.run(query, [name, password, token], callback);
}

function findUser(name, password, callback) {
    const query = `SELECT * FROM users WHERE name = ? AND password = ?`;
    db.get(query, [name, password], callback);
}

export { db, addUser, findUser };
