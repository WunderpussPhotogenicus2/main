const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = 3000;

// import movieControllers file
const movieControllers = require('../controllers/movieControllers');

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.post('/db', movieControllers.getAllMovies, (req, res) => {
    // q: do we want to return all movies, or send only one movie?
    return res.json(res.locals.allMovies); 
});

// if params route
app.post('/db/:director/:actor/:year/:language/:genre', movieControllers.getFilteredMovies, (req, res) => {
    return res.json(res.locals.filteredMovies); 
});

// if body route
app.post('/db/filter', movieControllers.getFilteredMovies, (req, res) => {
    return res.json(res.locals.filteredMovies); 
});

/*
psql --host=scratch-db.cvmmondruc9o.us-east-2.rds.amazonaws.com --port=5432 --username=wonderpus --password --dbname=scratch-db

*/

module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));