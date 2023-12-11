import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="footer-left">
            <h1>
                LOOK AT  <br/>THESE LINKS 👀 <br/>
            </h1>
        </div>
        <div className="footer-right">
            <h3>Interests</h3>   
            <div className="interests">
                <p>Frontend Development</p>
                <p>React</p>
                <p>Backend Development</p>
                <p>Learning in General</p>
               
           
            </div>

            <hr />

            <h3>Interested in me? Professionally of course. </h3>
            <button className="hire-me">
            <a href="mailto:NarvinBlas@gmail.com">Contact Me</a>
            </button>
        
            <hr></hr>

            <div className="social-icons">
        <a href="https://github.com/Narvinator" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/narvin-blas-896549233/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>

        <a
          href="https://discord.gg/366258389019262990"
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
          href="https://steamcommunity.com/id/nanohaaa/"
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
    </div>
  )
}

export default Contact