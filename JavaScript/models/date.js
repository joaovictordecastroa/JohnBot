/**
 * @author - João Victor de Castro Alves
 * @exports formatDate
 * @requires moment
 * @requires moment-timezone
 */

const moment = require('moment');
require('moment-timezone');

/**
 * @method - Method then format a date returned by API GitHub
 *  @param {String} date - GitHub's date
 * @returns {String} - String on format DD/MM/YYYY HH:mm:ss
 */
function formatDate(date) {
    const formatedDate = moment(date);
    return formatedDate.tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');
}


module.exports = formatDate;