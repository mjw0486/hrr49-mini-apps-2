const db = require('./db.json');


const getData = function(req, callback) {
  const result = [];
  console.log('?');
  for (const event of db.events) {
    if (event.description.indexOf(req) !== -1) {
      result.push(event);
    }
  }
  console.log(result);
  callback(null, result);
}

module.exports = {
  getData
}