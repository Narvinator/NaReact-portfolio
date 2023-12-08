import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'

function Hero = () => {

    return (
        <div className='hero' id='home'>
        <h2 className='description'>Narvin Blas</h2>
        <h2 className='title'>Greetings, I'm Narvin</h2>
        <h3 className='tagline'>Web Developer</h3>
        <p className='paragraph'>Greetings! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site. I am always itching to learn new things and be better and I can not wait to gain more coding experience! 🙌 </p>
        <div className="hero-btns">
            <button className="hire-me">
                <a href="" target='_blank'>
                    GET MY CV
                </a>
                    </button>
            <button className="lets-talk">
            <Link spy={true} smooth={true} offset={50} duration={500} to="contact">
            LETS TALK
            </Link>  
                </button>
        </div>
   
    <div className="social-icons">
    <a href="https://www.linkedin.com/" target="_blank">
        <i className="fa-brands fa-linkedin-in"></i>
    </a>
    
    
    <a href="https://github.com/Narvinator" target="_blank">
        <i className="fa-brands fa-github"></i>
    </a>

    </div>
</div>



    )
}

export default Hero