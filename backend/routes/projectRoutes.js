const asyncHandler = require('express-async-handler');
const dbQuery = require('../config/dbQuery');
const router = require('express').Router();

// @desc Fetch all project dates
// @route GET /api/projects/
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM projektira';

  dbQuery(query, res);
}));

// @desc Add new project date
// @route POST /api/projects/
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

// @desc Fetch minimum or maximum date depdending on passed query param
// @route GET /api/projects/date?min/max
// @access Public
router.get('/date', asyncHandler(async (req, res) => {
  const { query: { min } } = req;
  const query = (min !== undefined) ? 'SELECT min(dataProjekciq) from projektira' : 'SELECT max(dataProjekciq) from projektira';

  dbQuery(query, res);
}));

module.exports = router;
