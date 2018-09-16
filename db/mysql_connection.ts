// setting up connection. actual connection does not take place here
import mysql from 'mysql'
import { Connection } from 'mysql'

const connection: Connection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: ""
});

export default connection