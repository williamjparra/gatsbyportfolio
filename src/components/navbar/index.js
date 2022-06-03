import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon icon={faPaperPlane} size="1x" {...spining ? {spin: true} : null}/>
            </span>
            <Link className='nav-item' to="/">
                <span>
                    WilliamDev
                </span>
            </Link>
            <span className='nav-item'>
                Full-Stack
            </span>
        </nav>
    </div>
  )
}
