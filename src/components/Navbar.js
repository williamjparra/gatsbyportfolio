import React from 'react'
import './css/Navbar.css'
import { Link } from 'gatsby'

const NavBar = () => {
    return (
        <nav>
            <span>
                <Link to="/">
                    Wjs
                </Link>
            </span>
            <div className="navButtons">
                <Link to="/#about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    )
}

export default NavBar