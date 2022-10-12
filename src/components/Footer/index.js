import React, { useState } from 'react'
import './index.css'
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { TbHandStop } from 'react-icons/tb'


const Footer = () => {
    const [activeButton, setActiveButton] = useState(false)

    const mouseInteraction = () => {
        setActiveButton(!activeButton)
    }

    return (
        <footer>
            <div className="footerContainer">
                <section className="footer-description">
                    <p>
                        Full-stack web developer with strengths in nodejs, reactjs, redux-thunk, gatsby, styled-components, express, graphql with apollo and MongoDB. Also passionate about teaching, with a soft skill in patience.<br /><br />

                        Looking for an opportunity to use my skills to build amazing things that make a difference.<br /><br />

                        Please reach out if you need a full-stack web developer on your team!
                    </p>
                </section>
                <section className="footer-socials">
                    <div className="footer-social-containers">
                        <a 
                            href="https://www.linkedin.com/in/william-parra-677a39175/" 
                            target="_Blank" 
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                            linkedin
                        </a>
                        <a 
                            href="https://www.instagram.com/williamdev.js/" 
                            target="_Blank" 
                            rel="noreferrer"
                        >
                            <FaInstagramSquare />
                            instragram
                        </a>
                        <a 
                            href="https://www.twitter.com/WilliamdevJs" 
                            target="_Blank" 
                            rel="noreferrer"
                        >
                            <FaTwitterSquare />
                            Twitter
                        </a>
                        <div
                            className="contact-button" 
                            onMouseEnter={mouseInteraction}
                            onMouseLeave={mouseInteraction}
                            role="banner"
                        >
                            <b>
                                Contact Me
                            </b>
                            <TbHandStop />
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer
