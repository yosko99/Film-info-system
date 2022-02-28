const asyncHandler = require('express-async-handler');
const router = require('express').Router();
const db = require('../config/db');

// @desc Fetch all project dates from DB
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

module.exports = router;