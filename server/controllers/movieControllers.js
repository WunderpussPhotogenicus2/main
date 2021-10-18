const db = require('../models/movieModels');
const fetch = require('node-fetch')

// upload to aws command:
// \copy [table name] FROM ‘[file path]’ DELIMITER E’\t’

// export controller
module.exports = {
    addSwipe: (req, res, next) => {
        db.query(`INSERT INTO swipes (user_id, tconst, rightswipe, leftswipe) VALUES (${req.body.user}, ${req.body.imdbID}, ${req.body.rightswipe}, ${req.body.leftswipe})`)
            .then(data => {
                console.log('Swipe recorded');
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(err);
            })
    },

    getRightSwipes: (req, res, next) => {
        db.query(`SELECT tconst FROM swipes WHERE (user='${req.body.user}' AND rightswipe=true)`)
            .then(data => {
                res.locals.movies = data;
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
    getMovies: (req, res, next) => {
       
        // const { director, actor, date, language, genre } = req.body;
        const { genres } = req.body;
        const queryGenres = [];
        for (const el in genres) { 
            if (genres[el] === true) queryGenres.push(el);
        }
        const fakeGenres = ['Horror', 'Comedy'];
        // Modify this query for filtering
        const handleGenreQuery = fakeGenres.length > 1 ? `genres IN (${genres.map(el => `'${el}'`)})` : `genres='${genres}'`
        db.query(`SELECT tconst FROM movies WHERE ${handleGenreQuery} LIMIT 50;`)
            .then(data => {
                res.locals.movies = data.rows;
                console.log('Query returned successfully');
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(err);
            })
    },

    getOMDBInfo: async (req, res, next) => {
        const apiKey = 'da899953';
        const newMovies = [];
        for (const each of res.locals.movies) {
            const imdb_id = each.tconst;
            await fetch(`http://www.omdbapi.com/?i=${imdb_id}&apiKey=${apiKey}`)
                .then(data => data.json())
                .then(response => {
                    if ('Poster' in response && response['Poster'] !== 'N/A') {
                        each.posterUrl = response['Poster'];
                        each.director = response['Director'];
                        each.plot = response['Plot'];
                        newMovies.push(each); 
                    }
                })
                .catch(error => {
                    console.log(error);
                    return next(error);
                })
        }
        res.locals.movies = newMovies;
        console.log('length of res.locals.movies', res.locals.movies.length)
        return next();
    }
}