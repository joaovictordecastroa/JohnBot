/**
 * @description - Arquivo que contém as rotas para as requisições
 */

const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

/* GET information of repository listing. */
router.get('/repositories', async function(req, res, next) {
    res.send((JSON.stringify(await controllers.repositoryOrdenation("takenet"))));
});

module.exports = router;