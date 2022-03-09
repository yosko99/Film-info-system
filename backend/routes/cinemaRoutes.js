const asyncHandler = require('express-async-handler');
const dbQuery = require('../config/dbQuery');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all cinemas
// @route GET /api/cinemas/
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM kinoteatyr';

  dbQuery(query, res);
}));

// @desc Add a new cinema
// @route POST /api/cinemas/
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

      dbQuery(query, res, cinema);
    }
  });
}));

// @desc Fetch single cinema with provided cinema ID
// @route GET /api/cinemas/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM kinoteatyr WHERE kodKinoteatyr = ${id}`;

  dbQuery(query, res);
}));

// @desc Update cinema
// @route PUT /api/cinemas/
// @access Public
router.put('/', asyncHandler(async (req, res) => {
  const query = 'UPDATE kinoteatyr SET nazvanieKinoteatyr = ?, adresKinoteatyr = ?, kategoriqKinoteatyr = ?, imeDirektor = ?, kinorazpredelitel = ? WHERE kodKinoteatyr = ?';
  const { body: { data: { kodKinoteatyr, nazvanieKinoteatyr, adresKinoteatyr, kategoriqKinoteatyr, imeDirektor, kinorazpredelitel } } } = req;
  const data = [nazvanieKinoteatyr, adresKinoteatyr, kategoriqKinoteatyr, imeDirektor, kinorazpredelitel, kodKinoteatyr];

  dbQuery(query, res, data);
}));

// @desc Delete single cinema with provided ID
// @route DELETE /api/cinemas/:id
// @access Public
router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const relationDeleteQuery = `DELETE FROM projektira WHERE kodKinoteatyr = ${id}`;
  const query = `DELETE FROM kinoteatyr WHERE kodKinoteatyr = ${id} LIMIT 1`;

  db.query(relationDeleteQuery);
  dbQuery(query, res);
}));

module.exports = router;
