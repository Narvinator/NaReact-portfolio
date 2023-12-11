import React from 'react'
import './About.css'
import ReactIcon from '../assets/react.png'
import JavaScript from '../assets/javascript.png'
import HTML from '../assets/html.png'
import jQuery from '../assets/jquery.png'
import BootStrap from '../assets/bootstrap.png'
import MySql from '../assets/mysql.png'
import GitHublogo from '../assets/github.png'
import Netlify from '../assets/netlify.svg'
import Heroku from '../assets/heroku_icon_130912.png'
import VSCode from '../assets/vscode.png'
import NPMlogo from '../assets/npm.png'
import Discord from '../assets/discord.png'
import Zoomlogo from '../assets/zoom.webp'
import CSS from '../assets/css.png'
import Express from '../assets/express.png' 
import MongoDB from '../assets/mongodb.png'
import NodeJS from  '../assets/nodejs.png'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="about-me">
        <h2 className='title'>About Me</h2>
        <p className='paragraph about-para'>

          Greetings! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site. I'm always itching to learn new things and be better and I can't wait to gain more coding experience! 🙌
        </p>

        <button className="hire-me">
          <a href="" target="_blank" rel="noreferrer"
          >
            RESUME
          </a>
        </button>
      </div>
      <div className="about-skills">


        <h2 className="skill-title">Front-End</h2>
        <div className="skills">
          <div className="skill">
            <img src={ReactIcon} alt="" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src={JavaScript} alt="" />
            <p>JavaScript</p>
          </div>

          <div className="skill">
            <img src={HTML} alt="" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <img src={CSS} alt="" />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <img src={jQuery} alt="" />
            <p>jQuery</p>
          </div>

          <div className="skill">
            <img src={BootStrap} alt="" />
            <p>Bootstrap</p>
          </div>

        </div>
        <h2 className="skill-title">Back-End</h2>
        <div className="skills">
          
          <div className="skill">
              <img src={NodeJS} alt="" />
              <p>Node.js</p>
            </div>

            <div className="skill">
              <img src={Express} alt="" />
              <p>Express.js</p>
            </div>

            <div className="skill">
              <img src={MySql} alt="" />
              <p>MySQL</p>
            </div>

            <div className="skill">
              <img src={MongoDB} alt="" />
              <p>MongoDB</p>
            </div>

          </div>

          <h2 className="skill-title">Version Control & Deployment</h2>
          <div className="skills">

            <div className="skill">
              <img src={GitHublogo} alt="" />
              <p>GitHub</p>
            </div>


            <div className="skill">
              <img src={Netlify} alt="" />
              <p>Netlify</p>
            </div>
            <div className="skill">
              <img src={Heroku} alt="" />
              <p>Heroku</p>
            </div>
          </div>
          <h2 className="skill-title">Tools</h2>
          <div className="skills">
            <div className="skill">
              <img src={VSCode} alt="" />
              <p>VS Code</p>
            </div>

            <div className="skill">
              <img src={NPMlogo} alt="" />
              <p>npm</p>
            </div>

          </div>

          <h2 className="skill-title">Communication</h2>
          <div className="skills">
            <div className="skill">
              <img src={Discord} alt="" />
              <p>Discord</p>
            </div>

            <div className="skill">
              <img src={Zoomlogo} alt="" />
              <p>Zoom</p>
            </div>
          </div>



        </div>
        
    </section>
  )
}


export default About