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

export default function Discover(filters) {

  const plsMovies = () => {
    fetch('/db', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters)
    })
    .then(data => data.json())
    .then(result => ( console.log(result), setMovies(result), setIndex(0)))
    .then(console.log('done!'))
  }

  useEffect(() => {
    plsMovies()
  }, [])

  // const [movies, setMovies] = useState([])
  const [movies, setMovies] = useState([{     
    tconst: 'tt8982280',
    title: 'pls wait',
    year: '2021',
    mpaa: '10',
    rating: 'R',
    posterUrl: 'https://media.istockphoto.com/vectors/please-be-patient-sign-vector-id1225835214?k=20&m=1225835214&s=612x612&w=0&h=T8HzPf-47F2UGCZoVZWn4ZCqN2U24DNxKqu2304ZmEo=',
    director: 'ME',
    plot: 'pls wait'
    }])
  const [index, setIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState(); // Tracks which direction we swipped

  const swiped = (direction, nameToDelete) => { // Add functionality
    console.log('removing: ' + (Math.floor((movies.length -1) * .66)))
    index < (Math.floor((movies.length -1) * .66)) ?  setIndex(index + 1) : (plsMovies(), setIndex(index + 1)); //(setMovies(shuffleArray(movies)), setIndex(0))
    setLastDirection(direction)
  }

  const outOfFrame = (movie, dir) => { // Which movie leaves the frame
    fetch('/db/swipe',  {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...movie, direction: dir})
    })
    console.log(movie)
  }

  const getMovie = (index) => {
    let movieTitle = movies[index]?.title;
    let fixedMovieTitle = movieTitle?.replace('\'', '')
    let description = movies[index]?.plot;
    let fixedPlot = description?.replace('\'', '')
    // console.log(movieTitle?.replace('\'', ''))
    // return <TinderCard className='swipe' preventSwipe={['up', 'down']} key={fixedMovieTitle} onSwipe={(dir) => swiped(dir, fixedMovieTitle)} onCardLeftScreen={(dir) => outOfFrame({...movies[index], plot: fixedPlot, title: fixedMovieTitle}, dir)}>
    //   <div className='outterCard'>
    //     <div style={{ backgroundImage: 'linear-gradient(to top, black 15%, transparent, transparent, transparent,  transparent), url(' + movies[index]?.posterUrl + ')' }} className='card'>
    //     <h3 className='test'> <h2>{fixedMovieTitle}</h2> <h4>Rating: {movies[index]?.mpaa}</h4> {`Description: ${fixedPlot}`} </h3>
    //     </div>
    //   </div>
    // </TinderCard>
    return <TinderCard className='swipe' key={fixedMovieTitle} onSwipe={(dir) => swiped(dir, fixedMovieTitle)} onCardLeftScreen={(dir) => outOfFrame({...movies[index], plot: fixedPlot, title: fixedMovieTitle}, dir)}>
    <div className='outterCard'>
      <div style={{ backgroundImage: 'linear-gradient(to top, black 15%, transparent, transparent, transparent,  transparent), url(' + movies[index]?.posterUrl + ')' }} className='card'>
      <h3 className='test'> <h2>{fixedMovieTitle} ({movies[index]?.year}) </h2> <h4>Rating: <text className="descriptionText">{movies[index]?.rating}/10</text></h4> Plot: <text className="descriptionText">{` ${fixedPlot}`} </text> </h3>
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
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} 
    </div>
  );
}


