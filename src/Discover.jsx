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


const db = [
  {
    name: 'Fiona',
    url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg',
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    name: 'Baby Shrek',
    url: 'https://i.redd.it/kvlb3lccx8j41.png',
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    name: 'Puss in Boots',
    url: 'https://m.media-amazon.com/images/I/61D0QLJU-hL._AC_SX425_.jpg',
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    name: 'Dragon',
    url: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/8/18/asset/7cb8aad1d309/sub-buzz-1859-1588964329-1.jpg?downsize=900:*&output-format=auto&output-quality=auto',
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    name: 'Donkey',
    url: 'https://i.ytimg.com/vi/6Q6qHRHTTPg/maxresdefault.jpg',
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    name: 'Shrek',
    url: 'https://i.insider.com/60817ec5354dde0018c06960?width=700',
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
]

export default function Discover() {

  const movies = db;
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
    return <TinderCard className='swipe' key={movies[index]?.name} onSwipe={(dir) => swiped(dir, movies[index]?.name)} onCardLeftScreen={() => outOfFrame(movies[index]?.name)}>
      <div className='outterCard'>
        <div style={{ backgroundImage: 'linear-gradient(to top, black 15%, transparent, transparent, transparent,  transparent), url(' + movies[index]?.url + ')' }} className='card'>
        <h3 className='test'> <h2>{movies[index]?.name}</h2> <h4>Rating: 5 stars</h4> {`Description: ${movies[index]?.Description}`} </h3>
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
