
/**
 * @description - Módulo que realiza a requisição de porfólio da API do GitHub
 * @author João Victor de Castro Alves
 * @requires Axios - biblioteca de requisição http
 */

const axios = require('axios');



/**
 * @function getRepository
 * @returns {Array[Object]} - Retorna um JSON com todos os repositórios;
 * @param {String} username - Nome de usuário do repositório
 * @async
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