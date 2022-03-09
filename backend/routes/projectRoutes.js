const projectController = require('../controllers/projectController');
const asyncHandler = require('express-async-handler');
const router = require('express').Router();

// @desc Fetch all project dates
// @route GET /api/projects/
// @access Public
router.get('/', asyncHandler(projectController.getProjects));

// @desc Add new project date
// @route POST /api/projects/
// @access Public
router.post('/', asyncHandler(projectController.addProject));

// @desc Fetch all dates with specific kod film
// @route GET /api/projects/film/:id
// @access Public
router.get('/film/:id', asyncHandler(projectController.getDatesWithFilmID));

// @desc Fetch minimum or maximum date depdending on passed query param
// @route GET /api/projects/date?min/max
// @access Public
router.get('/date', asyncHandler(projectController.getMinMaxDate));

module.exports = router;
