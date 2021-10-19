import React, { useEffect, useState } from 'react'

export default function Likes() {

  useEffect(() => {
    fetch('/db/likes')
    .then(result => result.json())
    .then(data => setDb(data))
  }, [])

  const [db, setDb] = useState([
    {
      name: 'Baby Shrek',
      url: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1007_.jpg',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      name: 'Puss in Boots',
      url: 'https://m.media-amazon.com/images/I/61D0QLJU-hL._AC_SX425_.jpg',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      name: 'Donkey (2003)',
      url: 'https://i.ytimg.com/vi/6Q6qHRHTTPg/maxresdefault.jpg',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
  ])

  
  const likes = [];

  for (let i = 0; i < db.length; i++) {
    likes.push(<div className='Like'>
    <img className='Picture' src={db[i].poster_url}/>
    <div className='nameAndDescription'>
      <p className='titleOfLike'>{db[i].title}</p>
      <p className='descriptionOfLike'>{db[i].plot}</p>
    </div>
    </div>)
  } 

  return (
    <div>
      <h1>LIKES</h1>
      <div>{likes}</div>
    </div>
  )
}
