// import react
import React from 'react'
// import files
import './Player.css'
// import images
import back_arrow_icon from '../../assets/back_arrow_icon.png'


const Player = () => {
 
  const [apiData, setApiData] = React.useState({
    name: '',
    key: '',
    type: '',
    published_at: ''
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWIxZTA4Y2QyNTY2YmQ3NWQ1NTAzMjdhYTY4YzM2MyIsIm5iZiI6MTc4MDgyOTYwMy41MDU5OTk4LCJzdWIiOiI2YTI1NGRhM2YxZjQxNzEwZmZlYzYyYTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r1ArW62iQiGED1Xwd-L_1P1jWfn3J2mrHapBj0yx4B4'
  }
};

useEffect(() => {
fetch('https://api.themoviedb.org/3/movie/1339713/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => {
    setApiData({
      name: res.name,
      key: res.key,
      type: res.type,
      published_at: res.published_at
    });
  })
  .catch(err => console.error(err));
}, [])

  return (
    <div className='player'>

      <img src={back_arrow_icon} alt="Back" />
      <iframe width="90% " height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" allowFullScreen></iframe>
      <div className="player_info">
        <p>Published Data</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
