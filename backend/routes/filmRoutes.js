const asyncHandler = require('express-async-handler');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all films
// @route GET /api/film/
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM film';

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

// @desc Add a new film
// @route POST /api/film/
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

      db.query(query, film, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  });
}));

// @desc Fetch single film with provided film ID
// @route GET /api/film/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM film WHERE kodFilm = ${id}`;

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

// @desc Fetch all films with specific category
// @route GET /api/films/categories/:category
// @access Public
router.get('/categories/:category', asyncHandler(async (req, res) => {
  const { params: { category } } = req;
  const query = `SELECT * FROM film WHERE kategoriqFilm = '${category}'`;

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

// @desc Update film
// @route PUT /api/film/
// @access Public
router.put('/', asyncHandler(async (req, res) => {
  const query = 'UPDATE film SET nazvanieFilm = ?, rejisyorFilm = ?, kompozitorFilm = ?, tematikaFilm = ?, kategoriqFilm = ?, scenaristFilm = ? WHERE kodFilm = ?';
  const { body: { data: { kodFilm, nazvanieFilm, kategoriqFilm, kompozitorFilm, rejisyorFilm, scenaristFilm, tematikaFilm } } } = req;

  db.query(query, [nazvanieFilm, rejisyorFilm, kompozitorFilm, tematikaFilm, kategoriqFilm, scenaristFilm, kodFilm], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

// @desc Delete single film with provided ID
// @route DELETE /api/film/:id
// @access Public
router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM film WHERE kodFilm = ${id} LIMIT 1`;

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

module.exports = router;
