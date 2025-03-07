import React, { useState } from 'react'

const Hero = () => {
    //functions
    const TextCounter=()=>{
        const [text,setText]=useState("");
        
    }
  return (
    <div className='hero-section'>
      <div className="hero-top">
      <div className="hero"><h2>Analyze your text <br /> in real-time.</h2></div>
      <div className="char-container">
        <textarea type="text" placeholder='Start typing here...(or paste your text)' />
      </div>
      </div>
    </div>
  )
}

export default Hero
