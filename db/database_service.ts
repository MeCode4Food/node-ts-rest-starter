import { Connection, MysqlError } from 'mysql'
import Journal from '../models/journal'
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
    executeReadQuery(query: string, args: Array<string>): Promise<Array<Journal>>{
        return new Promise((resolve, reject) =>{
            this.connection.query(query, args, (err: MysqlError | null, results: Array<any>) => {
                if(err){ 
                    console.log(err);
                    reject(err);
                }
                else {
                    let journalArray: Array<Journal> = [];

                    if(results.length !== 0){
                        results.forEach((rawJournal) => {
                            let singleJournal = new Journal(rawJournal);
                            journalArray.push(singleJournal);
                        })
                        resolve(journalArray);
                    }
                    else{
                        let notFoundError = new Error("No journals found for given query");
                        reject(notFoundError);
                    }
                }
            })
        })
    }

    executeWriteQuery(query: string, args: Array<string>): Promise<void>{
        return new Promise((resolve, reject) => {
            this.connection.query(query, args, (err: MysqlError | null, results: any) => {
                // results is any because it doesn't matter - check with the existence of err
                if(err){ 
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve();
                }
            })
        })
    }
}

export default DatabaseService;