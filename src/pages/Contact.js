import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="footer-left">
            <h1>
                I LOVE <br/>COFFEE <br/> CHAT ☕️
            </h1>
        </div>
        <div className="footer-right">
            <h3>Interests</h3>   
            <div className="interests">
                <p>Frontend Development</p>
                <p>React</p>
                <p>Backend Development</p>
             
               
                <p>New Opportunities</p>
           
            </div>

            <hr />

            <h3>something <span><a href="mailto:NarvinBlas@gmail.com">Contact Me</a></span></h3>

            <hr />

            <div className="social">
                <span><a href="https://github.com/" target="_blank">GITHUB</a></span>
                <span> <a href="https://www.linkedin.com/" target="_blank">LINKEDIN</a></span>
                
                
            </div>
        </div>
    </div>
  )
}

export default Contact