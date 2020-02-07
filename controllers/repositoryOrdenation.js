const models = require('../models');


async function repositoryData(username) {
   const repositoryJSON = await models.getRepository(username);
   const repositoryInfo = repositoryJSON.map(repository => {
      return {
         name: repository.name ? repository.name : "",
         url: repository.html_url ? repository.html_url : "",
         description: repository.description ? repository.description: "Esse repositório não possui uma descrição",
         apiUrl: repository.url ? repository.url : "",
         creationDate: repository.created_at ? repository.created_at : "",
         lastModification: repository.updated_at ? repository.updated_at : "",
         language: repository.language ? repository.language : "",
         login: repository.owner.login ? repository.owner.login : "",
         gitCloneUrl: repository.clone_url,
         size: repository.size ? repository.size : 0,
         watchers_count: repository.watchers_count ? repository.watchers_count : 0,
         topics: repository.topics ? repository.topics : [""]
      }
   });
   return repositoryInfo;
}


module.exports = repositoryData;


