const dbQuery = require('../config/dbQuery');
const db = require('../config/db');

exports.getFilms = async (req, res) => {
  const query = 'SELECT * FROM film';

  dbQuery(query, res);
};

exports.getFilm = async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM film WHERE kodFilm = ${id}`;

  dbQuery(query, res);
};

exports.createFilm = async (req, res) => {
  const idQuery = 'SELECT MAX(kodFilm) as maxID FROM film';
  const query = 'INSERT INTO film SET ?';

  const { body: { data: { nazvanieFilm, kategoriqFilm, kompozitorFilm, rejisyorFilm, scenaristFilm, tematikaFilm } } } = req;

  const film = {
    kodFilm: '',
    nazvanieFilm,
    kategoriqFilm,
    kompozitorFilm,
    rejisyorFilm,
    scenaristFilm,
    tematikaFilm
  };

  db.query(idQuery, (idErr, idResult) => {
    if (idErr) {
      res.send(idErr);
    } else {
      const maxID = idResult[0].maxID + 1;
      film.kodFilm = maxID;

      dbQuery(query, res, film);
    }
  });
};

exports.updateFilm = async (req, res) => {
  const query = 'UPDATE film SET nazvanieFilm = ?, rejisyorFilm = ?, kompozitorFilm = ?, tematikaFilm = ?, kategoriqFilm = ?, scenaristFilm = ? WHERE kodFilm = ?';
  const { body: { data: { kodFilm, nazvanieFilm, kategoriqFilm, kompozitorFilm, rejisyorFilm, scenaristFilm, tematikaFilm } } } = req;
  const data = [nazvanieFilm, rejisyorFilm, kompozitorFilm, tematikaFilm, kategoriqFilm, scenaristFilm, kodFilm];

  dbQuery(query, res, data);
};

exports.deleteFilm = async (req, res) => {
  const id = req.params.id;
  const relationDeleteQuery = `DELETE FROM projektira WHERE kodFilm = ${id}`;
  const query = `DELETE FROM film WHERE kodFilm = ${id} LIMIT 1`;

  db.query(relationDeleteQuery);
  dbQuery(query, res);
};

exports.getFilmBetweenDates = async (req, res) => {
  const { params: { min, max } } = req;
  const query = `SELECT nazvanieFilm FROM film WHERE kodFilm IN (SELECT kodFilm FROM projektira WHERE dataProjekciq BETWEEN '${min}' AND '${max}')`;

  dbQuery(query, res);
};

exports.getFilmByCategory = async (req, res) => {
  const { params: { category } } = req;
  const query = `SELECT * FROM film WHERE kategoriqFilm = '${category}'`;

  dbQuery(query, res);
};

exports.distinctCategories = async (req, res) => {
  const query = 'SELECT DISTINCT kategoriqFilm FROM film';

  dbQuery(query, res);
};
