const asyncHandler = require('express-async-handler');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all project dates
// @route GET /api/project/
// @access Public
router.get('/', asyncHandler(async (req, res) =>{
    const query = `SELECT * FROM projektira`;

    db.query(query, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}));

// @desc Add new project date
// @route POST /api/cinema/
// @access Public
router.post('/', asyncHandler(async (req, res) =>{    
    const query = 'INSERT INTO projektira SET ?'

    const project = {
        dataProjekciq: req.body.data.dataProjekciq,
        cenaBilet: req.body.data.cenaBilet,
        kodKinoteatyr: req.body.data.kodKinoteatyr,
        kodFilm: req.body.data.kodFilm
    }

    db.query(query, project, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })    
}));

module.exports = router;