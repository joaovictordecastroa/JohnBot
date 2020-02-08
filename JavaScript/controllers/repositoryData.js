/**
 * @author - João Victor de Castro Alves
 * @exports repositoryData
 * @requires models
 * @description - Building a JSON with relevant information from the GitHub repositories
 */
const models = require('../models');

/**
 * @async
 * @function repositoryData
 * @description - Building a JSON with relevant information from the GitHub repositories
 * @param {String} username - username of GitHub repositories 
 * @returns {JSON}
 */
async function repositoryData(username) {
   const repositoryJSON = await models.getRepository(username);
   try {
      const repositoryInfo = repositoryJSON.map(repository => {
         return {
            name: repository.name ? repository.name : "",
            url: repository.html_url ? repository.html_url : "",
            description: repository.description ? repository.description: "Esse repositório não possui uma descrição",
            apiUrl: repository.url ? repository.url : "",
            creationDate: repository.created_at ? (repository.created_at) : "",
            lastModification: repository.updated_at ? (repository.updated_at) : "",
            language: repository.language ? repository.language : "",
            login: repository.owner.login ? repository.owner.login : "",
            gitCloneUrl: repository.clone_url,
            size: repository.size ? repository.size : 0,
            watchers_count: repository.watchers_count ? repository.watchers_count : 0,
            topics: repository.topics ? repository.topics : [""],
            image: repository.owner.avatar_url ? repository.owner.avatar_url : "" 
         }
      });
      return repositoryInfo;
   } catch(error) {
      return(error);
   }
}


module.exports = repositoryData;


