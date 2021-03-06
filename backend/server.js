const [notFound, errorHandler] = require('./middleware/errorMiddleware');
const projectRoutes = require('./routes/projectRoutes');
const dynamicRoute = require('./routes/dynamicRoute');
const cinemaRoutes = require('./routes/cinemaRoutes');
const filmRoutes = require('./routes/filmRoutes');
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/dynamicQuery', dynamicRoute);
app.use('/api/projects', projectRoutes);
app.use('/api/cinemas', cinemaRoutes);
app.use('/api/films', filmRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT, process.env.DB_HOSTNAME);
});
