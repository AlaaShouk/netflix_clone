import React ,{ useEffect , useRef } from 'react'
import './TitileCards.css'
import cards_data from "../../assets/cards/Cards_data";

const TitileCards = () => {

const cardsRef = useRef(); 

const handleWheel = (e) => { 
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}
 
useEffect(() => {
  cardsRef.current.addEventListener("wheel", handleWheel); 
},[] );

  return (
    <>
    <div className='titleCards'> 
      <h2>popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card , index) => {
          return <div className="card" key={index}>
           <img src={card.image} alt="" className='card-img' /> 
           <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
      </>
  )
}

export default TitileCards
