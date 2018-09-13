import express from 'express'

const apiRouter : express.Router  = express.Router();

apiRouter.get('/:id', (req, res) => {
    res.status(200).json({ status: "OK", message:`ID: ${req.params.id}`});
})

export default apiRouter