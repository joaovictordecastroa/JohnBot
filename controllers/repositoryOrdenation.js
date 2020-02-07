const respositoryData = require('./repositoryData');
const moment = require('moment');
const formatDate = require('../models/date');



async function repositoryOrdenation(username) {
    const data = await respositoryData(username);
    let ordenatedData = data.sort(function (actualElement, nextElement) {
        return new Date(actualElement.creationDate) - new Date(nextElement.creationDate);
    });
    ordenatedData =  ordenatedData.map(repository => {
        repository.creationDate = formatDate(repository.creationDate);
        return repository;
    });
    return ordenatedData.filter(function(repository){
        return repository.language == "C#";
    });
}

module.exports = repositoryOrdenation;