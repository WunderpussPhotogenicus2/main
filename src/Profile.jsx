import React, { useState } from 'react'

// Possible put request of filters
// Comedy[x] romance[x] horror[]
// x[] y[] z[]
// a[] b[] c[x]
// Box logic (if(state.comedy === true) check the the box)
// state: { Comedy: true, romance:true, c: true }

// state needs to start with

// Default state filters: { }
// Updated state filters: { Horror: false, Comedy: True }

// SELECT ALL except HORROR

// let ourObject = { }
// ourObject = { Horror: false, Romance: true, Comedy: False }
// ourObject = { Comedy: True, ...ourObject }

export default function Profile({changeFilters, filters}) {
  // const [filters, setFilters] = useState({ 'Comedy': true, 'Sci-fi': true, 'Horror': true, 'Romance': true, 'Action': true, 'Thriller': true, 'Drama': true, 'Mystery': true, 'Crime': true, 'Animation': true, 'Adventure': true, 'Fantasy': true });
  // const handleDeselect =

  const genres = ['Comedy', 'Sci-fi', 'Horror', 'Romance', 'Action', 'Thriller', 'Drama', 'Mystery', 'Crime', 'Animation', 'Adventure', 'Fantasy']
  const allCheckboxes = [];
  for (let i = 0; i < genres.length; i++) { //console.log('Key: ', e.target.value, ', Value: ', e.target.checked)
    allCheckboxes.push(<div className='CheckBox'> 
      <input type="checkbox" id={genres[i]} name="box1" value={genres[i]} onClick={e => changeFilters({ ...filters, [e.target.value] : e.target.checked})} checked={filters[genres[i]]} />
      <label for={genres[i]}>pls {genres[i]}</label>
    </div>)
  }
  
  return (
    <div>
      <h1 className="pageTitle">pls profile</h1>
      <div className="filterBox">
        <h4> pls filter: </h4>
        <div className="checkBoxes">
        {allCheckboxes}

        </div>
        {/* <button onClick={() => handleDeselect()}>Deselect all</button> */}
        <button className="updateStackButton" onClick={() => console.log(filters)}>pls update</button>
      </div>

    </div>
  )
}
