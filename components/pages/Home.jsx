import React from 'react'
import BackgroundImage from "../assets/arches.jpg"


function Home() {
  return (
    <div className='home'>
      <div className='header' style = {{backgroundImage: `url(${BackgroundImage})`}}>
       <h1>PORTFOLIO</h1>
      </div>
    </div>
  )
}

export default Home
