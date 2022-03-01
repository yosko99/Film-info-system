const asyncHandler = require('express-async-handler');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all cinemas
// @route GET /api/cinema/
// @access Public
router.get('/', asyncHandler(async (req, res) =>{
    const query = `SELECT * FROM kinoteatyr`;

    db.query(query, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}));

// @desc Add a new cinema
// @route POST /api/cinema/
// @access Public
router.post('/', asyncHandler(async (req, res) =>{    
    const idQuery = 'SELECT MAX(kodKinoteatyr) as maxID FROM kinoteatyr';
    const query = 'INSERT INTO kinoteatyr SET ?'

    const cinema = {
        kodKinoteatyr: '',
        nazvanieKinoteatyr: req.body.data.nazvanieKinoteatyr,
        adresKinoteatyr: req.body.data.adresKinoteatyr,
        kategoriqKinoteatyr: req.body.data.kategoriqKinoteatyr,
        imeDirektor: req.body.data.imeDirektor,
        kinorazpredelitel: req.body.data.kinorazpredelitel
    }

    db.query(idQuery, (idErr, idResult) => {
        if(idErr) {
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
            })
        }
    })
    
}));

module.exports = router;