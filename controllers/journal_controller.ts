import DatabaseService from '../db/database_service'
import Journal from '../models/journal'
import {Promise} from 'es6-promise'

class JournalController{
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService){
        this.dbService = dbService;
        this.dbService.openConnection();
    }

    getSingleJournal(id: number): Promise<Journal>{

        let query: string = "SELECT * FROM journal where id = ?";

        let args: Array<any> = [];
        args.push(id);
        
        return this.dbService.executeReadQuery(query, args)
            .then((results) =>{
                return results[0];
            })
    }
}

export default JournalController;