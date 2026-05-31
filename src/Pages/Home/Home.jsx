import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_Titel from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitileCards from '../../Components/TitileCards/TitileCards'
import { LuBadgeInfo } from "react-icons/lu";

 
function Home() {
  return (
    <>
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt='hero' className='hero-img' />
        <div className="hero-caption">
          <img src={hero_Titel} alt='title' className='caption-img' />
          <p>
            Discovering his ties to a secret ancient order , a young man living 
            in modern Istanbul embarks on a quest to save the city form an immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt='play' className='btn-icon' />play
            </button>
            <button className="btn btn-info dark-btn">
              <LuBadgeInfo className='btn-icon' />
              <span>More info</span>
            </button>
          </div>
          <TitileCards />
        </div>
      </div>
    </div>
    {/* //! more cards (Second Section ) */}
        <div className="more-cards">
        <TitileCards/>
        <TitileCards/>
        <TitileCards/> 
       
        
      </div>
      </>
  )
}

export default Home
