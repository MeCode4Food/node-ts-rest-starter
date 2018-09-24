import DatabaseService from '../db/database_service'
import Journal from '../models/journal'
import {Promise} from 'es6-promise'

class JournalController{
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService){
        this.dbService = dbService;
        this.dbService.openConnection();
    }

    getAllJournals(): Promise<Array<Journal>>{
        let query: string = "SELECT * FROM journal";
        let args: Array<any> = [];

        return this.dbService.executeReadQuery(query, args)
        .then((results) => {
            return results;
        })
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

    putSingleJournal(journal: Journal) : Promise<void>{
        let query: string = "INSERT INTO journal (id, title, content, date) VALUES(?, ?, ?, ?)  ON DUPLICATE KEY UPDATE id = ? ";

        let args: Array<any> = [];

        args.push(journal.id);
        args.push(journal.title);
        args.push(journal.content);
        args.push(journal.date);
        args.push(journal.id);

        // implement method for dbService
        return this.dbService.executeWriteQuery(query, args);
    }
}

export default JournalController;