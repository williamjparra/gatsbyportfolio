import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { BiCertification } from 'react-icons/bi'
import { IoMdCloseCircle } from 'react-icons/io'
import { SiBloglovin } from 'react-icons/si'
import { BasicContainer } from '../../styles/component'

import './index.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {}, [open])

  return (
    <>
      <section className={`options-container ${open ? "active" : ""}`}>
        <BasicContainer>
          <section className="links-container">
            <Link to="/blog" onClick={() => setOpen(false)}>
              <h4 className="link-title">
                Blogs <SiBloglovin />
              </h4>
            </Link>
            <Link to="/curriculum" onClick={() => setOpen(false)}>
              <h4 className="link-title">
                Curriculum Vitae
              </h4>
            </Link>
            <Link to="/" onClick={() => setOpen(false)}>
              <h4 className="link-title">
                Home
              </h4>
            </Link>
          </section>
        </BasicContainer>
      </section>
      <nav className={`navbar-con ${open ? "active" : ""}`}>
          <span 
            className='nav-item'
            onClick={() => setOpen(!open)}
          >
              {open ? "Close": "Options"}
              {open ? <IoMdCloseCircle /> : <BiCertification />}
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
    </>
  )
}
