import React from 'react'
import Stain from '../../../Assets/Pictures/Mancha.svg'

function StainTitle({hidden}) {
  return (
    <div>
       <img src={Stain} alt="Stain" className={`${hidden} md:block mt-[-15px] relative z-0  w-250 `} />
    </div>
  )
}

export default StainTitle
