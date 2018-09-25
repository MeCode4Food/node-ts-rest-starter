import express from 'express';
import JournalController from '../controllers/journal_controller';
import database_service from '../db/database_connection';
import Journal from '../models/journal';
import Response from '../models/response';
import util from 'util';

const journalRouter : express.Router  = express.Router();
const journalController = new JournalController(database_service);

journalRouter.get('/:id', (req, res) => {
    try {
        let id : number = req.params.id;
        journalController.getSingleJournal(id)
            .then((result)=> {
                let journalResult = new Journal(result);

                let response = new Response();
                response.status = "OK";
                response.data = journalResult.toJSONObj();
                
                res.status(200).json(response);
            })
            .catch((err) => {

                let response = new Response();
                response.status = "Bad Request";
                response.message = err.toString();
                res.status(400).json(response);
            })
    } catch (error) {
        console.log('error');
        console.log(error);
    }
})

journalRouter.get('/', (req, res) => {
    try {
        journalController.getAllJournals()
            .then((results)=>{
                let response = new Response();
                response.status = "OK";
                response.data = results;
                
                res.status(200).json(response);
            })
            .catch((err) => {

                let response = new Response();
                response.status = "Bad Request";
                response.message = err.toString();
                res.status(400).json(response);
            })
    } catch (error) {
        console.log('error');
        console.log(error);
    }
})



journalRouter.put('/:id', (req, res) => {
    try {
        let id: number = req.params.id;
        let journal = new Journal(req.body);
        journal.setId(id);

        journalController.putSingleJournal(journal)
            .then(() => {
                let response = new Response();
                response.status = "OK";
                
                res.status(200).json(response);
            })
            .catch((err) => {

                let response = new Response();
                response.status = "Bad Request";
                response.message = err.toString();
                res.status(400).json(response);
            });
    } catch (error) {
        console.log('error');
        console.log(error);
    }
})


export default journalRouter