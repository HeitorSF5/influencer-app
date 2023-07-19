const { Router } = require('express');
const { getAllInflu, createInflu, updateInflu, deleteInflu } = require('../controller/influController');

const influRouter = Router();

influRouter
  .post('/influencers', createInflu)
  .get('/influencers', getAllInflu)
  .put('/influencers/:id', updateInflu)
  .delete('/influencers/:id', deleteInflu)

module.exports = influRouter;