const asyncHandler = require('express-async-handler');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all cinemas
// @route GET /api/cinema/
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM kinoteatyr';

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

// @desc Add a new cinema
// @route POST /api/cinema/
// @access Public
router.post('/', asyncHandler(async (req, res) => {
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

      db.query(query, cinema, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  });
}));

// @desc Fetch single cinema with provided cinema ID
// @route GET /api/cinema/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM kinoteatyr WHERE kodKinoteatyr = ${id}`;

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

// @desc Update cinema
// @route PUT /api/cinema/
// @access Public
router.put('/', asyncHandler(async (req, res) => {
  const query = 'UPDATE kinoteatyr SET nazvanieKinoteatyr = ?, adresKinoteatyr = ?, kategoriqKinoteatyr = ?, imeDirektor = ?, kinorazpredelitel = ? WHERE kodKinoteatyr = ?';
  const { body: { data: { kodKinoteatyr, nazvanieKinoteatyr, adresKinoteatyr, kategoriqKinoteatyr, imeDirektor, kinorazpredelitel } } } = req;

  db.query(query, [nazvanieKinoteatyr, adresKinoteatyr, kategoriqKinoteatyr, imeDirektor, kinorazpredelitel, kodKinoteatyr], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

// @desc Delete single cinema with provided ID
// @route DELETE /api/cinema/:id
// @access Public
router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM kinoteatyr WHERE kodKinoteatyr = ${id} LIMIT 1`;

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}));

module.exports = router;
