const mysql = require('mysql2');

// connect database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: 'Pereira0802!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;