const moment = require('moment');
require('moment-timezone');

function formatDate(date) {
    const formatedDate = moment(date);
    return formatedDate.tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');
}


module.exports = formatDate;