import React ,{ useEffect , useRef } from 'react'
import './TitileCards.css'
import cards_data from "../../assets/cards/Cards_data";

const TitileCards = ({title,category}) => {

const cardsRef = useRef(); 

const [apiData , setApiData] = React.useState([]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWIxZTA4Y2QyNTY2YmQ3NWQ1NTAzMjdhYTY4YzM2MyIsIm5iZiI6MTc4MDgyOTYwMy41MDU5OTk4LCJzdWIiOiI2YTI1NGRhM2YxZjQxNzEwZmZlYzYyYTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r1ArW62iQiGED1Xwd-L_1P1jWfn3J2mrHapBj0yx4B4'
  }
};



const handleWheel = (e) => { 
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}
 
useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener("wheel", handleWheel); 
},[] );

  return (
    <>
    <div className='titleCards'> 
      <h2>{title?title:"popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card , index) => {
          return <div className="card" key={index}>
           <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" className='card-img' /> 
           <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
      </>
  )
}

export default TitileCards
