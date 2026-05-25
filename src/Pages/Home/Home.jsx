import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_Titel from '../../assets/hero_title.png'

function Home() {
  return (
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
        </div>
      </div>
    </div>
  )
}

export default Home
