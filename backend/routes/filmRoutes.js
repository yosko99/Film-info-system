const asyncHandler = require('express-async-handler');
const dbQuery = require('./function/dbQuery');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all films
// @route GET /api/films/
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM film';

  dbQuery(query, res);
}));

// @desc Add a new film
// @route POST /api/films/
// @access Public
router.post('/', asyncHandler(async (req, res) => {
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
}));

// @desc Fetch single film with provided film ID
// @route GET /api/films/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM film WHERE kodFilm = ${id}`;

  dbQuery(query, res);
}));

// @desc Fetch all films with specific category
// @route GET /api/films/category/:category
// @access Public
router.get('/category/:category', asyncHandler(async (req, res) => {
  const { params: { category } } = req;
  const query = `SELECT * FROM film WHERE kategoriqFilm = '${category}'`;

  dbQuery(query, res);
}));

// @desc Update film
// @route PUT /api/films/
// @access Public
router.put('/', asyncHandler(async (req, res) => {
  const query = 'UPDATE film SET nazvanieFilm = ?, rejisyorFilm = ?, kompozitorFilm = ?, tematikaFilm = ?, kategoriqFilm = ?, scenaristFilm = ? WHERE kodFilm = ?';
  const { body: { data: { kodFilm, nazvanieFilm, kategoriqFilm, kompozitorFilm, rejisyorFilm, scenaristFilm, tematikaFilm } } } = req;
  const data = [nazvanieFilm, rejisyorFilm, kompozitorFilm, tematikaFilm, kategoriqFilm, scenaristFilm, kodFilm];

  dbQuery(query, res, data);
}));

// @desc Delete single film with provided ID
// @route DELETE /api/films/:id
// @access Public
router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const relationDeleteQuery = `DELETE FROM projektira WHERE kodFilm = ${id}`;
  const query = `DELETE FROM film WHERE kodFilm = ${id} LIMIT 1`;

  db.query(relationDeleteQuery);
  dbQuery(query, res);
}));

// @desc Fetch all films between two dates
// @route GET /api/films/date
// @access Public
router.get('/date/:min/:max', asyncHandler(async (req, res) => {
  const { params: { min, max } } = req;
  const query = `SELECT nazvanieFilm FROM film WHERE kodFilm IN (SELECT kodFilm FROM projektira WHERE dataProjekciq BETWEEN '${min}' AND '${max}')`;

  dbQuery(query, res);
}));

module.exports = router;
