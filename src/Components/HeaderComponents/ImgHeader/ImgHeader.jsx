import React, { useState } from 'react'
import ImgHeaderA from '../../../Assets/Pictures/Cabecera1.png'
import ImgHeaderB from '../../../Assets/Pictures/Cabecera2.png'
import './ImgHeader.css';

function ImgHeader() {
  const [img, setImg] = useState(true)
  const hoverHandler = () => {
    setImg(false)
  }
  const outHandler = () => {
    setImg(true)
  }
  return (
    
    <div className="outer-box md:h-4/5 ">
        
      {
      img
      ?
      <img src={ImgHeaderA} 
          onMouseEnter={hoverHandler} alt=''/>
      :
      <img src={ImgHeaderB} 
      onMouseLeave={outHandler} alt=''/>
      }
      
        
      </div>
    
      
  )
}

export default ImgHeader