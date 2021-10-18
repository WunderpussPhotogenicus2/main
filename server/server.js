const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = 3000;

// import movieControllers file
const movieControllers = require('./controllers/movieControllers');

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// get movies to display, req.body will include a genre filter
app.post('/db', movieControllers.getMovies, movieControllers.getOMDBInfo, (req, res) => {
    // q: do we want to return all movies, or send only one movie?
    return res.json(res.locals.movies); 
});

// swiping right to add movies to the user's liked db
// req.body will contain user id and movie id
app.put('/db/swipe', movieControllers.addSwipe, (req, res) => {
    return res.json('nice'); 
});

// get movies from a user's liked table
// req.body should include user id
app.post('/db/filter', movieControllers.getRightSwipes, movieControllers.getOMDBInfo, (req, res) => {
    return res.json(res.locals.movies); 
});

/*
psql --host=scratch-db.cvmmondruc9o.us-east-2.rds.amazonaws.com --port=5432 --username=wonderpus --password --dbname=scratch-db

*/

module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));