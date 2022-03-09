const dbQuery = require('../config/dbQuery');
const db = require('../config/db');

exports.getCinemas = async (req, res) => {
  const query = 'SELECT * FROM kinoteatyr';

  dbQuery(query, res);
};

exports.getCinema = async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM kinoteatyr WHERE kodKinoteatyr = ${id}`;

  dbQuery(query, res);
};

exports.addCinema = async (req, res) => {
  const idQuery = 'SELECT MAX(kodKinoteatyr) as maxID FROM kinoteatyr';
  const query = 'INSERT INTO kinoteatyr SET ?';

  const { body: { data: { nazvanieKinoteatyr, adresKinoteatyr, kategoriqKinoteatyr, imeDirektor, kinorazpredelitel } } } = req;

  const cinema = {
    kodKinoteatyr: '',
    nazvanieKinoteatyr,
    adresKinoteatyr,
    kategoriqKinoteatyr,
    imeDirektor,
    kinorazpredelitel
  };

  db.query(idQuery, (idErr, idResult) => {
    if (idErr) {
      res.send(idErr);
    } else {
      const maxID = idResult[0].maxID + 1;
      cinema.kodKinoteatyr = maxID;

      dbQuery(query, res, cinema);
    }
  });
};

exports.updateCinema = async (req, res) => {
  const query = 'UPDATE kinoteatyr SET nazvanieKinoteatyr = ?, adresKinoteatyr = ?, kategoriqKinoteatyr = ?, imeDirektor = ?, kinorazpredelitel = ? WHERE kodKinoteatyr = ?';
  const { body: { data: { kodKinoteatyr, nazvanieKinoteatyr, adresKinoteatyr, kategoriqKinoteatyr, imeDirektor, kinorazpredelitel } } } = req;
  const data = [nazvanieKinoteatyr, adresKinoteatyr, kategoriqKinoteatyr, imeDirektor, kinorazpredelitel, kodKinoteatyr];

  dbQuery(query, res, data);
};

exports.deleteCinema = async (req, res) => {
  const id = req.params.id;
  const relationDeleteQuery = `DELETE FROM projektira WHERE kodKinoteatyr = ${id}`;
  const query = `DELETE FROM kinoteatyr WHERE kodKinoteatyr = ${id} LIMIT 1`;

  db.query(relationDeleteQuery);
  dbQuery(query, res);
};
