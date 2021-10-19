const db = require('../models/movieModels');
const fetch = require('node-fetch')

// upload to aws command:
// \copy [table name] FROM ‘[file path]’ DELIMITER E’\t’

// export controller
module.exports = {
    addSwipe: (req, res, next) => {
        if (req.body.direction === 'right') {
            db.query(`INSERT INTO swipes (tconst, title, year, director, plot, poster_url, rightswipe, leftswipe) VALUES ('${req.body.tconst}', '${req.body.title}', '${req.body.year}', '${req.body.director}', '${req.body.plot}', '${req.body.posterUrl}', 'true', null)`)
            .then(data => {
                console.log('Right swipe recorded');
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(err);
            })
        }
        else if (req.body.direction === 'left') {
            db.query(`INSERT INTO swipes (tconst, title, year, director, plot, poster_url, rightswipe, leftswipe) VALUES ('${req.body.tconst}', '${req.body.title}', '${req.body.year}', '${req.body.director}', '${req.body.plot}', '${req.body.posterUrl}', null, 'true');`)
                .then(data => {
                    console.log('Left swipe recorded');
                    return next();
                })
                .catch(err => {
                    console.log(err);
                    return next(err);
                })
        } else {
            console.log(req.body.direction)
            return next('error on swipe direction?')
        }
    },

    getRightSwipes: (req, res, next) => {
        db.query(`SELECT * FROM swipes WHERE rightswipe='true';`)
            .then(data => {
              
                res.locals.movies = data.rows;
                console.log('Right swipes: ', res.locals.movies)
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
        const genres = req.body.filters;
        console.log('Genres from front end: ', genres);
        const queryGenres = [];
        for (const el in genres) { 
            // if (genres[el] === true) queryGenres.push(el);
            if (genres[el] === false) queryGenres.push(el);
        }
        // const fakeGenres = ['Horror', 'Comedy'];
        // Modify this query for filtering
        const handleGenreQuery = queryGenres.length > 1 ? `genres IN (${queryGenres.map(el => `'${el}'`)})` : `genres='${queryGenres}'`
        db.query(`SELECT tconst FROM filteredmovies WHERE NOT ${handleGenreQuery} ORDER BY RANDOM() LIMIT 30;`)
            .then(data => {
                res.locals.movies = data.rows;
                console.log('Query returned successfully', res.locals.movies, res.locals.movies.length);
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(err);
            })
    },

    getOMDBInfo: async (req, res, next) => {
        // OMDB API key goes here: http://www.omdbapi.com/apikey.aspx
        // const apiKey = 'e097f9c2'; // Tanner's key

        const newMovies = [];
        const deleteThese = [];
        for (const each of res.locals.movies) {
            const imdb_id = each.tconst;
            await fetch(`http://www.omdbapi.com/?i=${imdb_id}&apiKey=${apiKey}`)
                .then(data => data.json())
                .then(response => {
                    // console.log(response)
                    if (response['Response'] === 'False' || response['Poster'] === 'N/A') {
                        deleteThese.push(imdb_id);
                    } else {
                        each.title = response['Title'];
                        each.year = response['Year'];
                        each.mpaa = response['Rated'];
                        each.rating = response['imdbRating'];
                        each.posterUrl = response['Poster'];
                        each.director = response['Director'];
                        each.plot = response['Plot'];
                        each.genre = response['Genre'];
                        newMovies.push(each); 
                    }
                })
                .catch(error => {
                    console.log(error);
                    return next(error);
                })
        }
        // console.log('Deleting: ', deleteThese)
        // db.query(`DELETE FROM movies WHERE tconst IN (${deleteThese.map(el => `'${el}'`)});`)
        //     .then(data => {
        //         console.log('Movies without posters deleted from DB')
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         return next(err);
        //     });
        res.locals.movies = newMovies;
        // console.log('length of res.locals.movies', res.locals.movies)
        return next();
    }
}