// setting up connection. actual connection does not take place here
import mysql from 'mysql'
import { Connection } from 'mysql'

const config = require('../config/config.json');

const connection: Connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database_name
});

export default connection