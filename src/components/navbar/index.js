import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import './index.css'

export default function Navbar() {
  const [spining, setSpining] = useState(false) 

  return (
    <div>
        <nav className='navbar-con'>
            <span 
              className='nav-item' 
              onMouseOver={() => setSpining(true)} 
              onMouseLeave={() => setSpining(false)}
            >
                {"Options"}
                <FontAwesomeIcon icon={faAnglesDown}/>
            </span>
            <Link className='nav-item' to="/">
                <span>
                    WilliamDev
                </span>
            </Link>
            <span className='nav-item-disable'>
                Full-Stack
            </span>
        </nav>
    </div>
  )
}
