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

// app.post('/db', (req, res) => {
//     // q: do we want to return all movies, or send only one movie?
//     return res.json(
//         [
//           {
//               "tconst": "tt0285891",
//               "title": "Personal Problems",
//               "year": "1980",
//               "mpaa": "N/A",
//               "rating": "7.3",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTEyYjAyMTgtMzQ3My00NGNkLTk4OWQtYTI4ZDMxMmNkNWMwXkEyXkFqcGdeQXVyMjI3NDAyNg@@._V1_SX300.jpg",
//               "director": "Bill Gunn",
//               "plot": "A partly improvised story of a complicated marriage in the African-American community, the people surrounding the main couple, friends they are having affairs with, and unwanted relatives."
//           },
//           {
//               "tconst": "tt1813405",
//               "title": "Just Life",
//               "year": "2010",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTgxMTg1NDg0NF5BMl5BanBnXkFtZTgwNTU0NTA2MDE@._V1_SX300.jpg",
//               "director": "Victor Berardinelli, Guto Pastorello",
//               "plot": "Shows a dramatic story about a family which was taken apart as result of a tragedy."
//           },
        //   {
        //       "tconst": "tt5639438",
        //       "title": "The Second Shepherds' Play",
        //       "year": "2016",
        //       "mpaa": "N/A",
        //       "rating": "N/A",
        //       "posterUrl": "N/A",
        //       "director": "Douglas Morse",
        //       "plot": "Col, Gib and Daw are typical medieval shepherds: complaining about the weather, wives, and their political oppressors. They encounter the thief Mak out in the fields where they graze their ..."
        //   },
//           {
//               "tconst": "tt1016204",
//               "title": "Memorizing Dates",
//               "year": "2007",
//               "mpaa": "N/A",
//               "rating": "7.4",
//               "posterUrl": "N/A",
//               "director": "Chad Schneider",
//               "plot": "A frustrated photographer resuscitates his creative voice through tentative intimacy with a woman from his past."
//           },
//           {
//               "tconst": "tt3282598",
//               "title": "Le foreste del diavolo",
//               "year": "2005",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Leonardo Capodarte",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt0323886",
//               "title": "Santa",
//               "year": "1969",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Emilio Gómez Muriel",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt1337519",
//               "title": "Next Stop Belmondo",
//               "year": "2007",
//               "mpaa": "Not Rated",
//               "rating": "N/A",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzM2OWRmZDktODBjMC00MjQwLTlmN2QtZDJkY2U4Y2Q0NWM3XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
//               "director": "Lee Donald Taicher",
//               "plot": "Harry Fall's mockumentary and sexy comedy on the porn industry..."
//           },
//           {
//               "tconst": "tt0373689",
//               "title": "Aristophanes: The Gods Are Laughing",
//               "year": "1995",
//               "mpaa": "N/A",
//               "rating": "6.8",
//               "posterUrl": "N/A",
//               "director": "Coky Giedroyc",
//               "plot": "Specially commissioned by the British Film Institute and Channel 4, this pseudo-biography shows how Aristophanes became the father of political satire and why his theatrical innovations are still staples of the contemporary theatre."
//           },
//           {
//               "tconst": "tt0044343",
//               "title": "Almas en peligro",
//               "year": "1952",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDZjMWIzM2EtMzA4Mi00YWY2LTgxNzEtNTYxZTg3NGU3NDdmL2ltYWdlXkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_SX300.jpg",
//               "director": "Antonio Santillán",
//               "plot": "Two boys are sent to reform school under the guidance of Father Fernando, a young and dedicated priest."
//           },
//           {
//               "tconst": "tt3060800",
//               "title": "The Life Coach",
//               "year": "2013",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Jesus Basuel",
//               "plot": "Feeling it was his calling Robert 'Shanti Baba' Gallagher tries to help the suffering members of humamity, without ruining their lives first."
//           },
//           {
//               "tconst": "tt0225510",
//               "title": "Diepten",
//               "year": "1930",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Germain Baert, Jos Buyse",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt11143634",
//               "title": "All of Us",
//               "year": "2019",
//               "mpaa": "N/A",
//               "rating": "5.1",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDc5ZDY2M2UtYmQ2Zi00Y2Y4LWIwOTMtZWI0ZDU3OWVkZDU1XkEyXkFqcGdeQXVyMDg5ODM3Mw@@._V1_SX300.jpg",
//               "director": "Willem Wallyn",
//               "plot": "The story of a self-help group of 4 people with a terminal illness, led by a therapist without experience."
//           },
//           {
//               "tconst": "tt0105180",
//               "title": "The Prom",
//               "year": "1992",
//               "mpaa": "N/A",
//               "rating": "6.8",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzU0NmIyMGQtZTYzZS00YTUyLTlmNjgtNGM5MzJhYjMyMDk0XkEyXkFqcGdeQXVyMjI3MDczMjI@._V1_SX300.jpg",
//               "director": "Steven Shainberg",
//               "plot": "Marty is not comfortable showing his body at college or private. He is suffering from a skin disease called nevus flammeus. In town he stumbles on The Dunes. A porn-shop-theme-park with one booth named \"The Prom\". This is where Lana "
//           },
//           {
//               "tconst": "tt0032586",
//               "title": "Herz - modern möbliert",
//               "year": "1940",
//               "mpaa": "N/A",
//               "rating": "6.6",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTJlYmJhNDEtMWViMC00ZGY1LWFhYzAtNmU1OTc0YjZjMDM3XkEyXkFqcGdeQXVyNTk5NzQ5Ng@@._V1_SX300.jpg",
//               "director": "Theo Lingen",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt1803748",
//               "title": "The Divine Marigolds",
//               "year": "2011",
//               "mpaa": "Not Rated",
//               "rating": "8.0",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjE0MTc5MzU3OV5BMl5BanBnXkFtZTcwNjY3ODQzNA@@._V1_SX300.jpg",
//               "director": "Francisco Menéndez",
//               "plot": "An off kilter family comedy about a large Irish family living in Seattle."
//           },
//           {
//               "tconst": "tt0200478",
//               "title": "Beogradska deca",
//               "year": "1976",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Djordje Kadijevic",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt15509662"
//           },
//           {
//               "tconst": "tt5349984",
//               "title": "Diabolika",
//               "year": "2016",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "N/A",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt1826606",
//               "title": "Autodafè",
//               "year": "2010",
//               "mpaa": "N/A",
//               "rating": "5.0",
//               "posterUrl": "N/A",
//               "director": "Emiliano Cribari",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt0116786",
//               "title": "Klavim Lo Novhim Beyarok",
//               "year": "1996",
//               "mpaa": "N/A",
//               "rating": "6.8",
//               "posterUrl": "N/A",
//               "director": "Orna Raviv, Yohanan Raviv",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt1433335",
//               "title": "Saddam'in askerleri: Bir Gani Rüzgar Savata filmi",
//               "year": "2009",
//               "mpaa": "N/A",
//               "rating": "3.2",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTMzNjk5ZGUtN2ZiMC00MGE0LTkwMTItZTQwNjQ2MzZmZDkxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg",
//               "director": "Gani Savata",
//               "plot": "U have to watch this movie. Really U gonna understand Turkish people re racist"
//           },
//           {
//               "tconst": "tt2375555",
//               "title": "Stranger at the Inn",
//               "year": "2014",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Robert E. Lee",
//               "plot": "After the host of a country inn takes in a charming young man for the night, she discovers that beneath his innocence lies a secret that will change their lives forever."
//           },
//           {
//               "tconst": "tt1791687",
//               "title": "Without",
//               "year": "2011",
//               "mpaa": "N/A",
//               "rating": "5.8",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTcwYzlmNWEtZjk2Ni00ODZjLTllM2YtOTI3YjU2M2IxNGFiXkEyXkFqcGdeQXVyMDg3MTkzMA@@._V1_SX300.jpg",
//               "director": "Mark Jackson",
//               "plot": "On a remote wooded island, a young woman becomes caretaker to an old man in a vegetative state. Her isolated routine devolves into a struggle with sexuality, guilt and loss."
//           },
//           {
//               "tconst": "tt5450060"
//           },
//           {
//               "tconst": "tt0183144",
//               "title": "Gunshin Tachibana chûsa",
//               "year": "1926",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Genjirô Saegusa",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt5576314",
//               "title": "Follow the Plan",
//               "year": "2016",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "N/A",
//               "director": "Bella Mc-Caty",
//               "plot": "Rachel is fired from work after she misses a few days because of the suicide of her best friend Angela. She is found by a woman who promises to pay her if she falls in love with a criminal ..."
//           },
//           {
//               "tconst": "tt15386998",
//               "title": "Chakhyu Bandhan",
//               "year": "2021",
//               "mpaa": "N/A",
//               "rating": "N/A",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWJmNDk2NmMtY2EzZS00ZjI4LTg3OWItMDJhYTRiOTI1YjU0XkEyXkFqcGdeQXVyMTM2NDQ0NTk1._V1_SX300.jpg",
//               "director": "Rajendra Mohanta",
//               "plot": "N/A"
//           },
//           {
//               "tconst": "tt0265716",
//               "title": "Seaside Seduction",
//               "year": "2001",
//               "mpaa": "N/A",
//               "rating": "5.3",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTM3NjIzOTE5Ml5BMl5BanBnXkFtZTcwNDY3MDUyMQ@@._V1_SX300.jpg",
//               "director": "Patrick Coppola",
//               "plot": "When the body of her lover washes ashore, a young stripper becomes a prime suspect."
//           },
//           {
//               "tconst": "tt0047925",
//               "title": "Cela s'appelle l'aurore",
//               "year": "1956",
//               "mpaa": "N/A",
//               "rating": "6.8",
//               "posterUrl": "https://m.media-amazon.com/images/M/MV5BNmM5ZDVkNzctY2U4Zi00MzI5LTlkOTUtODllNTQwOGEwN2M2XkEyXkFqcGdeQXVyMDY4MzkyNw@@._V1_SX300.jpg",
//               "director": "Luis Buñuel",
//               "plot": "The wife of a physician who diligently cares for the poor, grows weary of their dull South France factory town and pressures her older husband to move to glorious Nice, on the Mediterranean. Dr. Valerio particularly empathizes with S"
//           },
//           {
//               "tconst": "tt1527628",
//               "title": "Hell Is Other People",
//               "year": "2010",
//               "mpaa": "N/A",
//               "rating": "6.9",
//               "posterUrl": "N/A",
//               "director": "Jarrod Whaley",
//               "plot": "Morty can't seem to make heads or tails of anyone: himself, least of all. And to make matters worse, all he's got in his pockets is a collection of heads and tails. What if he were to go ..."
//           }
//         ]); 
// });

// swiping right to add movies to the user's liked db
// req.body will contain user id and movie id
app.put('/db/swipe', movieControllers.addSwipe, (req, res) => {
    return res.json('nice'); 
});
// app.put('/db/swipe', (req, res) => {
//     console.log(`req.body: `, req.body)
//     // return res.json('nice'); 
// });

// get movies from a user's liked table
// req.body should include user id
app.get('/db/likes', movieControllers.getRightSwipes, (req, res) => {
    console.log('returning liked movies');
    return res.json(res.locals.movies); 
    // remove OMDB Info middleware and update the swipe middleware to add all info into the user table, last function will return an array directly from the table
});

/*
psql --host=scratch-db.cvmmondruc9o.us-east-2.rds.amazonaws.com --port=5432 --username=wonderpus --password --dbname=scratch-db

*/

module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));