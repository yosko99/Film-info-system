const cinemaController = require('../controllers/cinemaController');
const asyncHandler = require('express-async-handler');
const router = require('express').Router();

// @desc Fetch all cinemas
// @route GET /api/cinemas/
// @access Public
router.get('/', asyncHandler(cinemaController.getCinemas));

// @desc Fetch single cinema with provided cinema ID
// @route GET /api/cinemas/:id
// @access Public
router.get('/:id', asyncHandler(cinemaController.getCinema));

// @desc Add a new cinema
// @route POST /api/cinemas/
// @access Public
router.post('/', asyncHandler(cinemaController.addCinema));

// @desc Update cinema
// @route PUT /api/cinemas/
// @access Public
router.put('/', asyncHandler(cinemaController.updateCinema));

// @desc Delete single cinema with provided ID
// @route DELETE /api/cinemas/:id
// @access Public
router.delete('/:id', asyncHandler(cinemaController.deleteCinema));

module.exports = router;
