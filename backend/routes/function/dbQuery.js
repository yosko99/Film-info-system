const db = require('../../config/db');

const basicQuery = (query, res, optionalData = []) => {
  db.query(query, optionalData, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = basicQuery;
