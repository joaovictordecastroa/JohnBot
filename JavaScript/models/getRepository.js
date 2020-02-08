
/**
 * @description - Module that performs the request for the repositories information about an user on GitHub API and returns a JSON 
 * @author João Victor de Castro Alves
 * @requires Axios 
 */

const axios = require('axios');

/**
 * @function getRepository
 * @async
 * @description - Method to send a request for GitHub's API to get the JSON object about repositories information of a user
 * @returns {JSON} - Returns  repositories information of an user in JSON format
 * @param {String} username - Name of user on GitHub
 */
async function getRepository(username) {
    const repositoryInfo = await axios.get(`https://api.github.com/users/${username}/repos`)
    .then(function (response) {
      return(response.data);
    })
    .catch(error => {
        switch (error.response.status) {
            case 200: 
                return response.data;
                break;
            case 404: 
                return "User not found";
                break;
            case 403:
                return "API rate limit exceeded";
                break;
            default: 
                return "Error in request, please, try again";
                break;
        }
    })
    return repositoryInfo;
}

module.exports = getRepository;