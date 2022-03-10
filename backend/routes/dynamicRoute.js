const asyncHandler = require('express-async-handler');
const dbQuery = require('../config/dbQuery');
const router = require('express').Router();

// @desc Fetch data depending on passed query
// @route POST /api/dynamicQuery/
// @access Public
router.post('/', asyncHandler(async (req, res) => {
  const { body: { data: { query, variable } } } = req;
  dbQuery(query, res, variable);
}));

module.exports = router;
