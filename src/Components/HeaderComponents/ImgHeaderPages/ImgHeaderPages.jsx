import React from 'react'
import ImgHeaderNews from '../../../Assets/Pictures/CabeceraNoticias.png'
import ImgHeaderContact from '../../../Assets/Pictures/CabeceraContacto.png'

function ImgHeaderPages({img}) {
  return (
    <div className="outer-box md:h-4/5 ">
        
      {
      img
      ?
      <img src={ImgHeaderNews} alt=''/>
      :
      <img src={ImgHeaderContact} alt=''/>
      }
      
        
      </div>
  )
}

export default ImgHeaderPages