const asyncHandler = require('express-async-handler');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all films from DB
// @route GET /api/film/
// @access Public
router.get('/', asyncHandler(async (req, res) =>{
    const query = `SELECT * FROM film`;

    db.query(query, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}));


// @desc Add a new film to DB
// @route POST /api/film/
// @access Public
router.post('/', asyncHandler(async (req, res) =>{    
    const idQuery = 'SELECT MAX(kodFilm) as maxID FROM film';
    const query = 'INSERT INTO film SET ?'

    const film = {
        kodFilm: '',
        nazvanieFilm: req.body.data.nazvanieFilm,
        kategoriqFilm: req.body.data.kategoriqFilm,
        kompozitorFilm: req.body.data.kompozitorFilm,
        rejisyorFilm: req.body.data.rejisyorFilm,
        scenaristFilm: req.body.data.scenaristFilm,
        tematikaFilm: req.body.data.tematikaFilm
    }

    db.query(idQuery, (idErr, idResult) => {
        if(idErr) {
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
            })
        }
    })
    
}));

module.exports = router;