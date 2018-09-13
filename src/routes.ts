import express from 'express'
import apiRouter from './api-router'

const router : express.Router = express.Router();

router.all('/info', (req, res) => {
    res.status(200).json({ status: "OK", message:"Chick's Express API written in TS"});
});

router.use('/api', apiRouter);

export default router