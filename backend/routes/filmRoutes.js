const filmController = require('../controllers/filmController');
const asyncHandler = require('express-async-handler');
const router = require('express').Router();

// @desc Fetch all films
// @route GET /api/films/
// @access Public
router.get('/', asyncHandler(filmController.getFilms));

// @desc Fetch single film with provided film ID
// @route GET /api/films/:id
// @access Public
router.get('/:id', asyncHandler(filmController.getFilm));

// @desc Add a new film
// @route POST /api/films/
// @access Public
router.post('/', asyncHandler(filmController.createFilm));

// @desc Update film
// @route PUT /api/films/
// @access Public
router.put('/', asyncHandler(filmController.updateFilm));

// @desc Delete single film with provided ID
// @route DELETE /api/films/:id
// @access Public
router.delete('/:id', asyncHandler(filmController.deleteFilm));

// @desc Fetch all films with specific category
// @route GET /api/films/category/:category
// @access Public
router.get('/category/:category', asyncHandler(filmController.getFilmByCategory));

// @desc Fetch all films between two dates
// @route GET /api/films/date
// @access Public
router.get('/date/:min/:max', asyncHandler(filmController.getFilmBetweenDates));

module.exports = router;
