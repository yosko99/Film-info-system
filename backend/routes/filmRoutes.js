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
    const query = 'INSERT INTO film SET ?'
    const film = {
        nazvanieFilm: req.body.nazvanieFilm
    }
    
    res.send(req.body.film);
    // db.query(query, film, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(result);
    //     }
    // })
}));

router.post('/')

module.exports = router;