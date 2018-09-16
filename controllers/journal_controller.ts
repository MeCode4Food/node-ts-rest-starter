import DatabaseService from '../db/database_service'

class JournalController{
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService){
        this.dbService = dbService;
    }

    getSingleJournal(id: number){
        this.dbService.openConnection();

        let query: string = "SELECT * FROM journal where id = ?";

        let args: Array<any> = [];
        args.push(id);


        this.dbService.executeQuery(query, args)
            .then((results) =>{
                console.log(results);
            })
            .catch((err) =>{
                console.log(err);
            })
            .then(() => {
                this.dbService.closeConnection();
            })
    }
}

export default JournalController;