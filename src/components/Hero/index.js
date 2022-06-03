import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <header className='hero-header'>
        <div className='left-hero'>
            <h1>
                Full-Stack JavaScript Developer from Venezuela
            </h1>
        </div>
        <div className='right-hero'>
            <h3>
                passion for web development, being envolved in the procces of create amazing styled UI's
            </h3>
            <div className='soft-skills-talker'>
                <span>Problem Solving</span>
                <span>Passion For Learning</span>
                <span>Always Improving</span>
            </div>
        </div>
    </header>
  )
}
