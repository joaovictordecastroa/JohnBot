/**
 * @description - Arquivo que contém as rotas para as requisições
 */

const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

/* GET information of repository listing. */
router.get('/repositories/:username', async function(req, res, next) {
    
    res.send(JSON.stringify(await controllers.repositoryOrdenation(req.params.username)));
});

module.exports = router;