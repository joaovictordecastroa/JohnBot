const models = require('../models');

async function repositoryOrdanation(username) {
   // return JSON.stringify(await models.getRepository(username));
   return (JSON.stringify(await models.getRepository("joaovictordecastroa")));
}

module.exports = repositoryOrdanation;


