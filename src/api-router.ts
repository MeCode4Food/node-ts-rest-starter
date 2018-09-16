import express from 'express';
import JournalController from '../controllers/journal_controller';
import database_service from '../db/database_connection';
import Journal from '../models/journal';

const apiRouter : express.Router  = express.Router();
const journalController = new JournalController(database_service);

apiRouter.get('/:id', (req, res) => {
    try {
        let id : number = req.params.id;
        journalController.getSingleJournal(req.params.id)
            .then((result)=>{
                let journalResult = new Journal(result)
                res.status(200).json({ status: "OK", message:`ID: ${req.params.id}`, result: journalResult})
            })
            .catch((err) => {
                res.status(400).json({ status: "NOT OK", message: err.toString()});
            })
    } catch (error) {
        console.log('error');
        console.log(error);
    }
})

export default apiRouter