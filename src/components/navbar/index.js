import React from 'react'
import { Link } from 'gatsby'

import './index.css'

export default function navbar() {
  return (
    <>
        <nav className="navbar-con">
            <span className='nav-item'>
                Options
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
    </>
  )
}
