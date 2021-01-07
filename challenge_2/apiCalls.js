const {apiURL} = require('./api.js');
const axios = require('axios');

const getBits = function(start, end, callback) {

  axios.get(`${apiURL}?start=${start}&end=${end}`)
  .then((response) => {
    callback(null, response);
  })
  .catch((err) => {
    console.log('error: ', err);
    return callback(err, null);
  });
}

module.exports = {
  getBits
}