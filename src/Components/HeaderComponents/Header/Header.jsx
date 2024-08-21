import React from 'react'
import './Header.css'
import NavBar from '../../NavBarsComponents/NavBar/NavBar'

function Header() {
  return (
    <div className='header md:h-[100vh]'>
        <NavBar/>
    </div>
  )
}

export default Header