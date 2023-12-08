import React from 'react'
import './About.css'

import HTML from '../assets/html.png'
import jQuery from '../assets/jquery.png'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="about-me">
        <h2 className='title'>About Me</h2>
        <p className='about-title'>

        Greetings! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site. I'm always itching to learn new things and be better and I can't wait to gain more coding experience! 🙌
        </p>

     
      <div className="about-skills">
        <h2 className='skill-title'>Front-End</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
              alt="" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
              alt="" />
            <p>JavaScript</p>
          </div>
         
          <div className="skill">
            <img src={HTML}
              alt="" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/640px-CSS3_logo.svg.png"
              alt="" />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <img src={jQuery}
              alt="" />
            <p>jQuery</p>
          </div>
          <div className="skill">
            
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png'
              alt="" />
            <p>Bootstrap</p>
          </div>
        </div>
        <h2 className='skill-title'>Back-End</h2>
        <div className="skills">
          
        </div>
       
       
       
        
         
          </div>
          <div className="skill">
          <img src="https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png" alt="" />
            <p>npm</p>
          </div>
        </div>
      </div>



    </div>
    </section>
  )
}


export default About