/**
 * @author - João Victor de Castro Alves
 * @requires express
 * @requires controllers
 * @description - Routes for API request
 * @exports router
 */

const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

/**
 * @description - Route to API request that returns a JSON formatted for Robot John
 * @returns {JSON}
 */
router.get('/repositories', async function(req, res, next) {
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