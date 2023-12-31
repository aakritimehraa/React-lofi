import React, { useState } from 'react'
import './Style.scss'
import logo from '../../assets/images/logo.gif'
import { FaExpand } from "react-icons/fa";
import ToggleButton from '../Toggle/Index';

function Header() {

  const [fullscreen , setFullScreen] = useState(false)

  const handleFullscreen = () => {
    if(!fullscreen){
      document.documentElement.requestFullscreen()
      setFullScreen(true)
    }
    else{
      document.exitFullscreen()
      setFullScreen(false)
    }
  }

  return (
    <div className='header'>
        <img className='logo' src={logo} alt='' />
         <div className='header_btns'>
          <ToggleButton />
        <FaExpand className='icon' fontSize={'24px'} color='#ffffff' onClick={handleFullscreen} />
        </div>
    </div>
  )
}

export default Header