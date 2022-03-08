const asyncHandler = require('express-async-handler');
const dbQuery = require('./function/dbQuery');
const router = require('express').Router();

// @desc Fetch all project dates
// @route GET /api/project/
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM projektira';

  dbQuery(query, res);
}));

// @desc Add new project date
// @route POST /api/cinema/
// @access Public
router.post('/', asyncHandler(async (req, res) => {
  const query = 'INSERT INTO projektira SET ?';

  const { body: { data: { dataProjekciq, cenaBilet, kodKinoteatyr, kodFilm } } } = req;

  const project = {
    dataProjekciq,
    cenaBilet,
    kodKinoteatyr,
    kodFilm
  };

  dbQuery(query, res, project);
}));

// @desc Fetch all dates with specific kod film
// @route GET /api/projects/film/:id
// @access Public
router.get('/film/:id', asyncHandler(async (req, res) => {
  const { params: { id } } = req;
  const query = `SELECT dataProjekciq FROM projektira WHERE kodFilm = '${id}'`;

  dbQuery(query, res);
}));

module.exports = router;
