/**
 * @author - João Victor de Castro Alves
 * @description - Method that returns a JSON ordered by date in ascending order  
 * @exports repositoryRepositoryService
 * @requires moment
 * @requires formatDate
 */

const respositoryData = require('../models/getRepositorys');
const moment = require('moment');

/**
 * @async
 * @function RepositoryService
 * @param {String} username - username of GitHub repositories
 * @description - Method that returns a JSON ordered by date in ascending order  
 * @returns {JSON}
 */
async function RepositoryService(username) {
    const data = await respositoryData(username);
    let ordenatedData = data.sort(function (actualElement, nextElement) {
        return new Date(actualElement.created_at) - new Date(nextElement.created_at);
    });
    return ordenatedData.filter(function(repository){
        return repository.language == "C#";
    });
}

module.exports = RepositoryService;