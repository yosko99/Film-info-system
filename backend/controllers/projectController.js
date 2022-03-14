const dbQuery = require('../config/dbQuery');

exports.getProjects = async (req, res) => {
  const query = 'SELECT * FROM projektira';

  dbQuery(query, res);
};

exports.addProject = async (req, res) => {
  const query = 'INSERT INTO projektira SET ?';

  const { body: { data: { dataProjekciq, cenaBilet, kodKinoteatyr, kodFilm } } } = req;

  const project = {
    dataProjekciq,
    cenaBilet,
    kodKinoteatyr,
    kodFilm
  };

  dbQuery(query, res, project);
};

exports.getDatesWithFilmID = async (req, res) => {
  const { params: { id } } = req;
  const query = `SELECT dataProjekciq FROM projektira WHERE kodFilm = '${id}'`;

  dbQuery(query, res);
};

exports.getMinMaxDate = async (req, res) => {
  const { query: { min } } = req;
  const query = (min !== undefined) ? 'SELECT min(dataProjekciq) from projektira' : 'SELECT max(dataProjekciq) from projektira';

  dbQuery(query, res);
};

exports.getMaxPrice = async (req, res) => {
  const query = `
    SELECT nazvanieFilm from film WHERE kodFilm in 
      (SELECT kodFilm FROM projektira WHERE cenaBilet = (SELECT MAX(cenaBilet) FROM projektira))`;

  dbQuery(query, res);
};
