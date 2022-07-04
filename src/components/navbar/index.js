import React from 'react'
import { Link } from 'gatsby'
import { BiCertification } from "react-icons/bi"

import './index.css'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar-con'>
            <span 
              className='nav-item' 
            >
                {"Options"}
                <BiCertification />
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
