import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
import pfp from '../assets/linkedinprofile.png'

const Hero = () => (
    <div className="hero" id="home">
        <div className="hero-overlay">
            <div className="description">
                <h2 className="title">Greetings, Im Narvin</h2>

                <h3 className="tagline">
                    
                </h3>
                <p className="paragraph">
                    ! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site.
                     I am always itching to learn new things and be better and I can not wait to gain more coding experience! 🙌
                      </p>
                <div className="hero-btns">
                    <button className="hire-me">
                        <a href="https://drive.google.com/file/d/1BxoJ4kd508i9GQmm6tds4kxGnW_uNSuy/view?usp=sharing" target='_blank'
                        rel="noreferrer">
                            RESUME
                        </a>
                    </button>
                    <button className="lets-talk">
                        <Link spy smooth offset={50} duration={500} to="contact">
                            CONTACT ME
                        </Link>
                    </button>
                </div>
            </div>
            <img src={pfp} alt="Narvin" className="hero-image"/>
               </div>
    
        <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" />
            </a>
            <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-linkedin-in" />
            </a>

            <a
                href="https://discord.gg/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-discord" />
            </a>
            <a
                href="https://www.instagram.com/narweeb/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-instagram" />
            </a>
            <a
                href="https://steamcommunity.com/profiles/76561198237195400/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-steam" />
            </a>
            <a
                href="https://www.twitch.tv/narchiyo"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-twitch" />
            </a>

        </div>
    </div>



)


export default Hero