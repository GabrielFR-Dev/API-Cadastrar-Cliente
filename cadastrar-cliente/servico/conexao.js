import mysql from 'mysql2/promise';
import env from 'dotenv';

env.config();

const pool = mysql.createPool({
    host: process.env.CS_HOST,
    user: process.env.CS_USER,
    password: process.env.CS_PASSWORD,
    database: process.env.CS_DATABASE
})

export default pool;