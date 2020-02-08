/**
 * @author - João Victor de Castro Alves
 * @description - Method that returns a JSON ordered by date in ascending order  
 * @exports repositoryService
 * @requires moment
 * @requires formatDate
 */

const respositoryData = require('../models');
const moment = require('moment');

/**
 * @async
 * @function repositoryService
 * @param {String} username - username of GitHub repositories
 * @description - Method that returns a JSON ordered by date in ascending order  
 * @returns {JSON}
 */
async function repositoryService(username) {
    const data = await respositoryData.getRepository(username);
    let ordenatedData = data.sort(function (actualElement, nextElement) {
        return new Date(actualElement.created_at) - new Date(nextElement.created_at);
    });
    return ordenatedData.filter(function(repository){
        return repository.language == "C#";
    });
}

module.exports = repositoryService;