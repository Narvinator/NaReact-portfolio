import React from 'react'
import './App.css'

function App = () => {

    return (
        <div className='hero'>
            <h2 className='title'>Narvin Blas</h2>
            <h3 className='tagline'>Web Developer</h3>
            <p>Greetings! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site. I'm always itching to learn new things and be better and I can't wait to gain more coding experience! 🙌  </p>
            <div className="hero-btns">
                <button className="hire-me">Resume</button>
                <button className="lets-talk">Comments for me?</button>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                
                </a>
                <a href="https://github.com/Narvinator" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default App