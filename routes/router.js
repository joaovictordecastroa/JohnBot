/**
 * @description - Arquivo que contém as rotas para as requisições
 */

const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

/* GET information of repository listing. */
router.get('/repositories', async function(req, res, next) {
    //res.send((JSON.stringify(await controllers.repositoryOrdenation("takenet"))));
    const repo = await controllers.repositoryOrdenation("takenet");
    res.send({
        1: repo[0],
        2: repo[1],
        3: repo[2],
        4: repo[3],
        5: repo[4]
    });
});

module.exports = router;