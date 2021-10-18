const db = require('../models/movieModels');


// upload to aws command:
// \copy [table name] FROM ‘[file path]’ DELIMITER E’\t’

// export controller
module.exports = {
  // Initial stack
  // Get all movies (50-100)
    getAllMovies: (req, res, next) => {
        db.query('SELECT movies FROM movies;')
            .then(data => {
                // Get first 50-100, NOT all
                console.log('data', data.slice(0,50));
                res.locals.allMovies = data.slice(0, 50);
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(err);
            })
    },

    // User customized filters
    // date (year), director, actor, language, genre
    // Get filtered movies
    getFilteredMovies: (req, res, next) => {
       
        // How will the request look?? 
        // const { director, actor, date, language, genre } = req.params;
        // const { director, actor, date, language, genre } = req.body;

        // Modify this query for filtering
        db.query('SELECT movies FROM movies;')
            .then(data => {
                // Get first 50-100, NOT all
                console.log('data', data.slice(0,50));
                res.locals.filteredMovies = data.slice(0, 50);
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(err);
            })
    }

}