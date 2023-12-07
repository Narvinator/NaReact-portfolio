import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <h2 className='title'>About</h2>
    <section className='about' id='about'>
          <StickyBox offsetTop={20} offsetBottom={20}>
      <div className="about-me">
        <h2 className='title'>About Me</h2>
        <p className='paragraph about-para'>

        <p className='tagline'>Greetings! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site. I'm always itching to learn new things and be better and I can't wait to gain more coding experience! 🙌  </p>
        </p>
        <p className='paragraph about-para'>
        Greetings! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site. I'm always itching to learn new things and be better and I can't wait to gain more coding experience! 🙌
        </p>
        <p className='paragraph about-para'>
        Greetings! I am Narvin, a recent UCF Bootcamp graduate. I have a great deal of passions, but passion for coding created this site. I'm always itching to learn new things and be better and I can't wait to gain more coding experience! 🙌
           
      </div>
      </StickyBox>
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
       
        <div className="skills">
  
        
       
        </div>
        <h2 className='skill-title'>Tools</h2>
        <div className="skills">
         
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png" alt="" />
            <p>GitHub</p>
          </div>
          
          <div className="skill">
            <img src={JEST} alt="" />
            <p>JEST</p>
          </div>
          <div className="skill">
            <img src='https://avatars.githubusercontent.com/u/11260967?s=280&v=4' alt="" />
            <p>Chrome Dev Tools</p>
          </div>
          <div className="skill">
            <img src={VSCode} alt="" />
            <p>VS Code</p>
          </div>
        </div>
        <h2 className='skill-title'>Tools</h2>
        <div className="skills">
          
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png" alt="" />
            <p>GitHub</p>
          </div>
          
          <div className="skill">
            <img src={JEST} alt="" />
            <p>JEST</p>
          </div>
          <div className="skill">
            <img src='https://avatars.githubusercontent.com/u/11260967?s=280&v=4' alt="" />
            <p>Chrome Dev Tools</p>
          </div>
          <div className="skill">
            <img src={VSCode} alt="" />
            <p>VS Code</p>
          </div>
        </div>
        <h2 className='skill-title'>Tools</h2>
        <div className="skills">
          
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png" alt="" />
            <p>GitHub</p>
          </div>
        
          <div className="skill">
            <img src={JEST} alt="" />
            <p>JEST</p>
          </div>
          <div className="skill">
            <img src='https://avatars.githubusercontent.com/u/11260967?s=280&v=4' alt="" />
            <p>Chrome Dev Tools</p>
          </div>
          <div className="skill">
            <img src={VSCode} alt="" />
            <p>VS Code</p>
          </div>
        </div>
      </div>



    </div>
    </section>
  )
}


export default About