import React, { useContext } from 'react'
import { Link as Anchor } from 'gatsby'
import { Link } from 'react-scroll'
import { BlogContext } from '../Context'
import { StyledNav } from '../styles/component'


export default function Navbar({ siteTitle }) {
    const { animationButton } = useContext(BlogContext)

    return (
        <StyledNav>
            <div className="buttons-container">
                <div className="logo">
                    <Anchor to="/index">
                        <h1>
                            {siteTitle}
                        </h1>
                    </Anchor>
                </div>
                <div className="buttons">
                    <ul>
                        <li>
                            <Anchor to="/index">
                                <Link activeClass="active" to="about-me" spy={true} smooth={true} offset={50} >
                                    About Me
                                </Link>
                            </Anchor>
                        </li>
                        <li>
                            <Anchor to="/index">
                                <Link activeClass="active" to="my-projects" spy={true} smooth={true} offset={50} >
                                    My Projects
                                </Link>
                            </Anchor>
                        </li>
                        <li>
                            <Anchor to="/index">
                                <Link activeClass="active" to="my-videos" spy={true} smooth={true} offset={50} >
                                    My videos
                                </Link>
                            </Anchor>
                        </li>
                        <li>
                            <Anchor to="/index">
                                <Link activeClass="active" to="contact-me" spy={true} smooth={true} offset={50} >
                                    Contact Me
                                </Link>
                            </Anchor>
                        </li>
                        <li>
                            <Anchor to="/pdf">
                                <Link activeClass="active" to="pdfViewver" spy={true} smooth={true} offset={50} >
                                    CV
                                </Link>
                            </Anchor>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="toggle-switch">
                <small>
                    Switch of 
                </small>
                <label className="switch">                        
                    <input type="checkbox" onChange={animationButton} />
                    <span className="slider round"></span>
                </label>
            </div>
        </StyledNav>
    )
}
