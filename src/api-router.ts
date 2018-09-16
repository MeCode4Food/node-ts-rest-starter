import express from 'express'
import JournalController from '../controllers/journal_controller';
import database_service from '../db/database_connection';

const apiRouter : express.Router  = express.Router();
const journalController = new JournalController(database_service);

apiRouter.get('/:id', (req, res) => {
    try {
        let id : number = req.params.id;
        journalController.getSingleJournal(req.params.id)
    } catch (error) {
        console.log('error');
        console.log(error);
    }
    res.status(200).json({ status: "OK", message:`ID: ${req.params.id}`});
})

export default apiRouter