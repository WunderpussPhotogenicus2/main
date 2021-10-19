import React, { useEffect, useState } from 'react'

export default function Likes() {

  useEffect(() => {
    fetch('/db/likes')
    .then(result => result.json())
    .then(data => setDb(data))
  }, [])

  const [db, setDb] = useState([])

  
  const likes = [];

  for (let i = 0; i < db.length; i++) {
    console.log(db[i])
    likes.push(<div className='Like'>
    <img className='Picture' src={db[i].poster_url}/>
    <div className='nameAndDescription'>
      <p className='titleOfLike'>pls {db[i].title} ({db[i].year})</p>
      <p className='descriptionOfLike'>{db[i].plot}</p>
      <p className='directorInfo'>pls director {db[i].director}</p>
    </div>
    </div>)
  } 

  return (
    <div>
      <h1 className="pageTitle">pls likes</h1>
      <div>{likes}</div>
    </div>
  )
}
