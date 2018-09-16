import { Connection, MysqlError } from 'mysql'
import connection from './mysql_connection';
import { Promise } from 'es6-promise' 

class DatabaseService{
    private connection: Connection;

    constructor(db: Connection){
        this.connection = db;
    }

    openConnection(){
        return this.connection.connect();
    }

    closeConnection(){
        return this.connection.end();
    }


    // remember to change type any to something else
    executeQuery(query: string, args: Array<string>): Promise<any>{
        return new Promise((resolve, reject) =>{
            this.connection.query(query, args, (err: MysqlError | null, results: Array<any>) => {
                if(err) Promise.reject(err)
                else Promise.resolve(results)
            })
        })
    }
}

export default DatabaseService;