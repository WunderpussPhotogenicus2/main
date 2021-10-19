import React from 'react'

export default function Likes() {

  // const db = [
  //   {
  //     name: 'Baby Shrek',
  //     url: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1007_.jpg',
  //     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  //   },
  //   {
  //     name: 'Puss in Boots',
  //     url: 'https://m.media-amazon.com/images/I/61D0QLJU-hL._AC_SX425_.jpg',
  //     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  //   },
  //   {
  //     name: 'Donkey (2003)',
  //     url: 'https://i.ytimg.com/vi/6Q6qHRHTTPg/maxresdefault.jpg',
  //     Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  //   },
  // ]

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
        "tconst": "tt1337519",
        "title": "Next Stop Belmondo",
        "year": "2007",
        "mpaa": "Not Rated",
        "rating": "N/A",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzM2OWRmZDktODBjMC00MjQwLTlmN2QtZDJkY2U4Y2Q0NWM3XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
        "director": "Lee Donald Taicher",
        "plot": "Harry Fall's mockumentary and sexy comedy on the porn industry..."
    },
    
  ]; 


  
  const testData = db[0]
  const likes = [];
  // for loop, inside iterate through db
  // for each element, push into likes array

  for (let i = 0; i < db.length; i++) {
    likes.push(<div className='Like'>
    <img className='Picture' src={db[i].posterUrl}/>
    <div className='nameAndDescription'>
      <p className='titleOfLike'>{db[i].title} ({db[i].year})</p>
      <p className='descriptionOfLike'>{db[i].plot}</p>
      <p className='directorInfo'>Directed by {db[i].director}</p>
    </div>
    </div>)
  } 

  return (
    <div>
      <h1 className="pageTitle">Likes</h1>
      <div>{likes}</div>
    </div>
  )
}
