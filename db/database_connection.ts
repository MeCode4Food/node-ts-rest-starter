import DatabaseService from './database_service'
import mysql_connection from './mysql_connection'

export default new DatabaseService(mysql_connection);