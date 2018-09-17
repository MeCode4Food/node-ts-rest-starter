import express from 'express'
import journalRouter from './journal_router'

const router : express.Router = express.Router();

router.all('/info', (req, res) => {
    res.status(200).json({ status: "OK", message:"Chick's Express API written in TypeScript"});
});

router.use('/journal', journalRouter);

export default router