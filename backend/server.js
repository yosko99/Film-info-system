const [notFound, errorHandler] = require('./middleware/errorMiddleware');
const express = require('express');
const db = require('./config/db');
require('dotenv').config();

const app = express();

app.get('/tables', (req, res) => {
    const tableName = req.query.table || '';
    const query = `SELECT * FROM ${tableName.toLowerCase()}`;

    db.query(query, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/insertFilm', (req, res) => {
    const film = {
        nazvanieFilm: 'testFilm',
        kompozitorFilm: 'testKompozitor'
    }

    const query = 'INSERT INTO film SET ?'

    db.query(query, film, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT, process.env.DB_HOSTNAME);
})