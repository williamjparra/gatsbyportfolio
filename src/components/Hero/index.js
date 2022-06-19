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
                <h4>
                    <span style={{
                        '--content': "'Problem Solving.'",
                        '--start-color': "#CC5803",
                        '--delay': "0s"
                    }}>
                            Problem Solving.
                    </span>
                    <span style={{
                        '--content': "'Passion For Learning.'",
                        '--start-color': "#CC5803",
                        '--delay': "3s"
                    }}>
                        knowledge Seeker.
                    </span>
                    <span style={{
                        '--content': "'Always Improving.'",
                        '--start-color': "#CC5803",
                        '--delay': "6s"
                    }}>
                        Always Improving.
                    </span>
                </h4>
            </div>
        </div>
    </header>
  )
}
