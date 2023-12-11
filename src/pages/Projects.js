import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'
import Weather from '../assets/screenshot weather.png'
import NoteTaker from '../assets/notetakerscreen.png'
import Tblog from '../assets/Tblogscreenie.png'
import SNA from '../assets/snascreen.png'
import Gatekeep from '../assets/For project.png'
import SMG from '../assets/smgfront.png'


const Projects = () => {
  const projectData = [
    {
      image_url:
        'https://raw.githubusercontent.com/Narvinator/NarReact-portfolio/main/src/assets/smgfront.png',
      project_name: 'SMG',
      description:
        'A Video Game database that allows the user post reviews, read reviews, save games to a profile, and leave comments',
      tech_stack: ['Axion', 'Handlebars', 'Express', 'MYSQL'],
      source_link:
        'https://share-my-game-566086c3c183.herokuapp.com/',
    },
    {
      image_url: 'https://raw.githubusercontent.com/Narvinator/NarReact-portfolio/main/src/assets/For%20project.png',
      project_name: '-iGatekeep',
      description:'',
    
      tech_stack: ['Basic Javascript', 'Insomnia', 'Soundcloud and Spotify API'],
      source_link:
        'https://narvinator.github.io/-Gatekeep/',
    },

    {
      image_url: 'https://raw.githubusercontent.com/Narvinator/NarReact-portfolio/main/src/assets/Tblogscreenie.png',
      project_name: 'T-Blog',
      description:
        '',
      tech_stack: ['Node.JS', 'Express.Js', 'Heroku Deployment', 'Handlebars'],
      source_link:
        'https://glacial-mountain-13703-8898a47f2b04.herokuapp.com/',
    },
    {
      image_url: 'https://raw.githubusercontent.com/Narvinator/NarReact-portfolio/main/src/assets/snascreen.png',
      project_name: 'Social Network API',
      description:
        ' ',
      tech_stack: ['Express.JS', 'Insomnia', 'Node.JS'],
      source_link:
        'https://github.com/Narvinator/SNA',
    },

    {
      image_url: 'https://raw.githubusercontent.com/Narvinator/NarReact-portfolio/main/src/assets/screenshot%20weather.png',
      project_name: 'Weather Tracker',
      description:
        '',
      tech_stack: ['Basic Javascript, Weather API'],
      source_link:
        'https://narvinator.github.io/Dash-Weather/r',
    },
    {
      image_url: 'https://raw.githubusercontent.com/Narvinator/NarReact-portfolio/main/src/assets/notetakerscreen.png',
      project_name: 'Note Creator',
      description:
        '',
      tech_stack: ['Node.JS','Insomnia'],
      source_link: 'https://glacial-mountain-13703-8898a47f2b04.herokuapp.com/',
    },
   

    // Add more projects as needed
  ]
 




  return (
    <div className='projects' id='projects'>
       <h1 className='title projects-title'>Portfolio</h1>
      <p className='projects-para'>
        Here are some of my deployed applications. Basic functionaliy exist, but I have a lot of styling to do.
        Look for the arrow in the cards for the website links 😅 The first 2 are collaborative efforts.
      </p>
      <div className="projects-container">
        {
          projectData.map((project, id) => (
            <ProjectCard

            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}

            />
          )
          )
        }
        </div>
    </div>
  )
}

export default Projects