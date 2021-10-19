import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'; // https://www.npmjs.com/package/react-tinder-card if this doesnt work use -> https://www.npmjs.com/package/react-swipeable
import MovieDisplay from './components/MovieDisplay.jsx'


const shuffleArray = (array) => {
  // Shuffle function found on stackoverflow. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}
const db =         [
          {
              "tconst": "tt0285891",
              "title": "Personal Problems",
              "year": "1980",
              "mpaa": "N/A",
              "rating": "7.3",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTEyYjAyMTgtMzQ3My00NGNkLTk4OWQtYTI4ZDMxMmNkNWMwXkEyXkFqcGdeQXVyMjI3NDAyNg@@._V1_SX300.jpg",
              "director": "Bill Gunn",
              "plot": "A partly improvised story of a complicated marriage in the African-American community, the people surrounding the main couple, friends they are having affairs with, and unwanted relatives."
          },
          {
              "tconst": "tt1813405",
              "title": "Just Life",
              "year": "2010",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTgxMTg1NDg0NF5BMl5BanBnXkFtZTgwNTU0NTA2MDE@._V1_SX300.jpg",
              "director": "Victor Berardinelli, Guto Pastorello",
              "plot": "Shows a dramatic story about a family which was taken apart as result of a tragedy."
          },
          {
              "tconst": "tt5639438",
              "title": "The Second Shepherds' Play",
              "year": "2016",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Douglas Morse",
              "plot": "Col, Gib and Daw are typical medieval shepherds: complaining about the weather, wives, and their political oppressors. They encounter the thief Mak out in the fields where they graze their ..."
          },
          {
              "tconst": "tt1016204",
              "title": "Memorizing Dates",
              "year": "2007",
              "mpaa": "N/A",
              "rating": "7.4",
              "posterUrl": "N/A",
              "director": "Chad Schneider",
              "plot": "A frustrated photographer resuscitates his creative voice through tentative intimacy with a woman from his past."
          },
          {
              "tconst": "tt3282598",
              "title": "Le foreste del diavolo",
              "year": "2005",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Leonardo Capodarte",
              "plot": "N/A"
          },
          {
              "tconst": "tt0323886",
              "title": "Santa",
              "year": "1969",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Emilio Gómez Muriel",
              "plot": "N/A"
          },
          {
              "tconst": "tt1337519",
              "title": "Next Stop Belmondo",
              "year": "2007",
              "mpaa": "Not Rated",
              "rating": "N/A",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzM2OWRmZDktODBjMC00MjQwLTlmN2QtZDJkY2U4Y2Q0NWM3XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
              "director": "Lee Donald Taicher",
              "plot": "Harry Fall's mockumentary and sexy comedy on the porn industry..."
          },
          {
              "tconst": "tt0373689",
              "title": "Aristophanes: The Gods Are Laughing",
              "year": "1995",
              "mpaa": "N/A",
              "rating": "6.8",
              "posterUrl": "N/A",
              "director": "Coky Giedroyc",
              "plot": "Specially commissioned by the British Film Institute and Channel 4, this pseudo-biography shows how Aristophanes became the father of political satire and why his theatrical innovations are still staples of the contemporary theatre."
          },
          {
              "tconst": "tt0044343",
              "title": "Almas en peligro",
              "year": "1952",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDZjMWIzM2EtMzA4Mi00YWY2LTgxNzEtNTYxZTg3NGU3NDdmL2ltYWdlXkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_SX300.jpg",
              "director": "Antonio Santillán",
              "plot": "Two boys are sent to reform school under the guidance of Father Fernando, a young and dedicated priest."
          },
          {
              "tconst": "tt3060800",
              "title": "The Life Coach",
              "year": "2013",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Jesus Basuel",
              "plot": "Feeling it was his calling Robert 'Shanti Baba' Gallagher tries to help the suffering members of humamity, without ruining their lives first."
          },
          {
              "tconst": "tt0225510",
              "title": "Diepten",
              "year": "1930",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Germain Baert, Jos Buyse",
              "plot": "N/A"
          },
          {
              "tconst": "tt11143634",
              "title": "All of Us",
              "year": "2019",
              "mpaa": "N/A",
              "rating": "5.1",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDc5ZDY2M2UtYmQ2Zi00Y2Y4LWIwOTMtZWI0ZDU3OWVkZDU1XkEyXkFqcGdeQXVyMDg5ODM3Mw@@._V1_SX300.jpg",
              "director": "Willem Wallyn",
              "plot": "The story of a self-help group of 4 people with a terminal illness, led by a therapist without experience."
          },
          {
              "tconst": "tt0105180",
              "title": "The Prom",
              "year": "1992",
              "mpaa": "N/A",
              "rating": "6.8",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzU0NmIyMGQtZTYzZS00YTUyLTlmNjgtNGM5MzJhYjMyMDk0XkEyXkFqcGdeQXVyMjI3MDczMjI@._V1_SX300.jpg",
              "director": "Steven Shainberg",
              "plot": "Marty is not comfortable showing his body at college or private. He is suffering from a skin disease called nevus flammeus. In town he stumbles on The Dunes. A porn-shop-theme-park with one booth named \"The Prom\". This is where Lana "
          },
          {
              "tconst": "tt0032586",
              "title": "Herz - modern möbliert",
              "year": "1940",
              "mpaa": "N/A",
              "rating": "6.6",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTJlYmJhNDEtMWViMC00ZGY1LWFhYzAtNmU1OTc0YjZjMDM3XkEyXkFqcGdeQXVyNTk5NzQ5Ng@@._V1_SX300.jpg",
              "director": "Theo Lingen",
              "plot": "N/A"
          },
          {
              "tconst": "tt1803748",
              "title": "The Divine Marigolds",
              "year": "2011",
              "mpaa": "Not Rated",
              "rating": "8.0",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjE0MTc5MzU3OV5BMl5BanBnXkFtZTcwNjY3ODQzNA@@._V1_SX300.jpg",
              "director": "Francisco Menéndez",
              "plot": "An off kilter family comedy about a large Irish family living in Seattle."
          },
          {
              "tconst": "tt0200478",
              "title": "Beogradska deca",
              "year": "1976",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Djordje Kadijevic",
              "plot": "N/A"
          },
          {
              "tconst": "tt15509662"
          },
          {
              "tconst": "tt5349984",
              "title": "Diabolika",
              "year": "2016",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "N/A",
              "plot": "N/A"
          },
          {
              "tconst": "tt1826606",
              "title": "Autodafè",
              "year": "2010",
              "mpaa": "N/A",
              "rating": "5.0",
              "posterUrl": "N/A",
              "director": "Emiliano Cribari",
              "plot": "N/A"
          },
          {
              "tconst": "tt0116786",
              "title": "Klavim Lo Novhim Beyarok",
              "year": "1996",
              "mpaa": "N/A",
              "rating": "6.8",
              "posterUrl": "N/A",
              "director": "Orna Raviv, Yohanan Raviv",
              "plot": "N/A"
          },
          {
              "tconst": "tt1433335",
              "title": "Saddam'in askerleri: Bir Gani Rüzgar Savata filmi",
              "year": "2009",
              "mpaa": "N/A",
              "rating": "3.2",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTMzNjk5ZGUtN2ZiMC00MGE0LTkwMTItZTQwNjQ2MzZmZDkxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg",
              "director": "Gani Savata",
              "plot": "U have to watch this movie. Really U gonna understand Turkish people re racist"
          },
          {
              "tconst": "tt2375555",
              "title": "Stranger at the Inn",
              "year": "2014",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Robert E. Lee",
              "plot": "After the host of a country inn takes in a charming young man for the night, she discovers that beneath his innocence lies a secret that will change their lives forever."
          },
          {
              "tconst": "tt1791687",
              "title": "Without",
              "year": "2011",
              "mpaa": "N/A",
              "rating": "5.8",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTcwYzlmNWEtZjk2Ni00ODZjLTllM2YtOTI3YjU2M2IxNGFiXkEyXkFqcGdeQXVyMDg3MTkzMA@@._V1_SX300.jpg",
              "director": "Mark Jackson",
              "plot": "On a remote wooded island, a young woman becomes caretaker to an old man in a vegetative state. Her isolated routine devolves into a struggle with sexuality, guilt and loss."
          },
          {
              "tconst": "tt5450060"
          },
          {
              "tconst": "tt0183144",
              "title": "Gunshin Tachibana chûsa",
              "year": "1926",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Genjirô Saegusa",
              "plot": "N/A"
          },
          {
              "tconst": "tt5576314",
              "title": "Follow the Plan",
              "year": "2016",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "N/A",
              "director": "Bella Mc-Caty",
              "plot": "Rachel is fired from work after she misses a few days because of the suicide of her best friend Angela. She is found by a woman who promises to pay her if she falls in love with a criminal ..."
          },
          {
              "tconst": "tt15386998",
              "title": "Chakhyu Bandhan",
              "year": "2021",
              "mpaa": "N/A",
              "rating": "N/A",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWJmNDk2NmMtY2EzZS00ZjI4LTg3OWItMDJhYTRiOTI1YjU0XkEyXkFqcGdeQXVyMTM2NDQ0NTk1._V1_SX300.jpg",
              "director": "Rajendra Mohanta",
              "plot": "N/A"
          },
          {
              "tconst": "tt0265716",
              "title": "Seaside Seduction",
              "year": "2001",
              "mpaa": "N/A",
              "rating": "5.3",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTM3NjIzOTE5Ml5BMl5BanBnXkFtZTcwNDY3MDUyMQ@@._V1_SX300.jpg",
              "director": "Patrick Coppola",
              "plot": "When the body of her lover washes ashore, a young stripper becomes a prime suspect."
          },
          {
              "tconst": "tt0047925",
              "title": "Cela s'appelle l'aurore",
              "year": "1956",
              "mpaa": "N/A",
              "rating": "6.8",
              "posterUrl": "https://m.media-amazon.com/images/M/MV5BNmM5ZDVkNzctY2U4Zi00MzI5LTlkOTUtODllNTQwOGEwN2M2XkEyXkFqcGdeQXVyMDY4MzkyNw@@._V1_SX300.jpg",
              "director": "Luis Buñuel",
              "plot": "The wife of a physician who diligently cares for the poor, grows weary of their dull South France factory town and pressures her older husband to move to glorious Nice, on the Mediterranean. Dr. Valerio particularly empathizes with S"
          },
          {
              "tconst": "tt1527628",
              "title": "Hell Is Other People",
              "year": "2010",
              "mpaa": "N/A",
              "rating": "6.9",
              "posterUrl": "N/A",
              "director": "Jarrod Whaley",
              "plot": "Morty can't seem to make heads or tails of anyone: himself, least of all. And to make matters worse, all he's got in his pockets is a collection of heads and tails. What if he were to go ..."
          }
        ]; 
// const db = [
//   {
//     name: 'Fiona',
//     url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg',
//     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
//   },
//   {
//     name: 'Baby Shrek',
//     url: 'https://i.redd.it/kvlb3lccx8j41.png',
//     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
//   },
//   {
//     name: 'Puss in Boots',
//     url: 'https://m.media-amazon.com/images/I/61D0QLJU-hL._AC_SX425_.jpg',
//     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
//   },
//   {
//     name: 'Dragon',
//     url: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/8/18/asset/7cb8aad1d309/sub-buzz-1859-1588964329-1.jpg?downsize=900:*&output-format=auto&output-quality=auto',
//     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
//   },
//   {
//     name: 'Donkey',
//     url: 'https://i.ytimg.com/vi/6Q6qHRHTTPg/maxresdefault.jpg',
//     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
//   },
//   {
//     name: 'Shrek',
//     url: 'https://i.insider.com/60817ec5354dde0018c06960?width=700',
//     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
//   },
// ]

export default function Discover({filters}) {

  // fn() => return fetch('/api/db', {method: 'POST', body: JSON.stringify({ filters: filters })})
  // useEffect((/* request x ammount of random movies from server/DB */) => {}, [])
  // { Drama: true, action: true, horror: true.... crime: true }
  // [ Drama, action, horror, crime ]
  // [{ movieName, url, description, info, movieID}, { movieName, url, description, info, movieID}, { movieName, url, description, info, movieID}, { movieName, url, description, info, movieID}]

  // fetch('/api/db', {method: 'PUT', body: JSON.stringify({ likedMovie: movieID, userID: 1 })})

  const movies = [];
  db.forEach(movie => {
    if (movie.posterUrl === 'N/A' || movie.rating === 'N/A' || movie.plot === 'N/A') console.log('oh no')
    else movies.push(movie);
  })
  const [index, setIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState(); // Tracks which direction we swipped

  /**
   * Things:  3) ?Show more of this genre?, 4) ? (Maybe only left and right swipe)
   * if direction = right -> Add to watch list
   * if direction = left -> add to don't show again list
   * At start no up or down, add later possibly: 3) ?Show more of this movie, genere, something?
   */
  const swiped = (direction, nameToDelete) => { // Add functionality
    console.log('removing: ' + nameToDelete)
    index < movies.length -1 ? setIndex(index + 1) : (shuffleArray(movies), setIndex(0));
    setLastDirection(direction)
  }

  const outOfFrame = (name) => { // Which movie leaves the frame
    console.log(name + ' left the screen!')
  }

  const getMovie = (index) => {
    return <TinderCard className='swipe' key={movies[index]?.title} onSwipe={(dir) => swiped(dir, movies[index]?.title)} onCardLeftScreen={() => outOfFrame(movies[index]?.title)}>
      <div className='outterCard'>
        <div style={{ backgroundImage: 'linear-gradient(to top, black 15%, transparent, transparent, transparent,  transparent), url(' + movies[index]?.posterUrl + ')' }} className='card'>
        <h3 className='test'> <h2>{movies[index]?.title} ({movies[index]?.year}) </h2> <h4>Rating: <text className="descriptionText">{movies[index]?.rating}/10</text></h4> Plot: <text className="descriptionText">{` ${movies[index]?.plot}`} </text> </h3>
        </div>
      </div>
    </TinderCard>
  }

  /**
   * Changes when we get our DB:
   * Extra data below the TinderCard
   * Possible flip on picture, or on info section
   * 
   */

  return (
    <div className='discoverContainer'>
      <div className='cardContainer'>
        { getMovie(index) }
      </div>
        {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}  */}
    </div>
  );
}
