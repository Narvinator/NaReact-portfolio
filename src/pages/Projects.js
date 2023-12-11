import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'


const Projects = () => {
  const projectData = [
    {
      image_url:
        '',
      project_name: 'SMG',
      description:
        'ARespiratory is developed in collaboration with Faculty Medical & Health Science, UPM. This mobile application has Augmented Reality(AR) features to assist medical students in learning the anatomy and physiology of the respiratory system. \n This application has obtained copyright by MyIPO.',
      tech_stack: ['Unity', 'Vuforia', 'Blender', 'Adobe XD'],
      source_link:
        'https://www.linkedin.com/posts/hfzkdr_arlearning-medicaleducation-innovation-activity-7125663966193758208-TGvP?utm_source=share&utm_medium=member_desktop',
    },
    {
      image_url: '',
      project_name: '-iGatekeep',
      description:
        'The EV Mobile Application is a solution developed for Educity Village (EV) to address the growing demand for a reliable booking system. Traditional booking methods proved fragile and prone to errors, leading to the development of this user-friendly mobile application for space booking. The app caters to the needs of EV residents and guests, offering efficient booking for sports courts, spaces, pool tables, and BBQ pits.',
      tech_stack: ['Flutter', 'Django', 'MySQL', 'Adobe XD'],
      source_link:
        'https://www.youtube.com/watch?v=LkATF4jqDlU&list=PLX3AEknl3ENJFVaBkrFAJlFyuyBgpo6ZI',
    },

    {
      image_url: '',
      project_name: 'CozyShop',
      description:
        'Cozyshop is an exciting and innovative ecommerce project that aims to redefine the online shopping experience. With a commitment to providing customers with top-quality products, outstanding service, and a seamless user experience.',
      tech_stack: ['Adobe XD', 'Canva'],
      source_link:
        'https://xd.adobe.com/view/dfd74d8e-99b2-497e-9184-ccc7c11577be-8a84/',
    },
    {
      image_url: '',
      project_name: 'PutraClass',
      description:
        'A proposed web system prototype for SK SERDANG to deal with Covid-19 back to school program. A complete website prototype consist of a classroom, a timetable, and a specified tab for submitting Covid-19 test result. ',
      tech_stack: ['Adobe XD'],
      source_link:
        'https://xd.adobe.com/view/5bd33c80-56bb-4607-9950-eaed180a760c-0e80/?hints=off',
    },

    {
      image_url: '',
      project_name: 'Aphasia Assist',
      description:
        'Application is developed in a collaboration project with PERKESO for patients that has been diagnosed with aphasia (language disorder). The application has image-to-speech features and is developed as an alternative for aphasia patients to communicate with other people in their daily life.',
      tech_stack: ['Adobe XD', 'Android Studio', 'Kotlin'],
      source_link:
        'https://drive.google.com/file/d/1-1_QVy3umJ7YzCTPjfuyjGcKv9XE389I/view',
    },
    {
      image_url: '',
      project_name: 'Pendekar Jahat',
      description:
        '"Pendekar Jahat" is a menacing 3D warrior character brought to life through meticulous 3D modeling and texturing. This dark and enigmatic character represents the embodiment of evil in a fantasy world. The project showcases an intricately designed evil warrior, featuring sinister armor, menacing weapons, and a foreboding presence."Pendekar Jahat" effectively conveys a character with a dark backstory and a malevolent purpose, adding depth to the character design.',
      tech_stack: ['Blender','3D Modeling'],
      source_link: 'https://streamable.com/tzlm44',
    },
   

    // Add more projects as needed
  ]
 




  return (
    <div className='projects' id='projects'>
       <h1 className='title projects-title'>Projects</h1>
      <p className='projects-para'>
        Here are some of my deployed applications. Basic functionaliy exist, but I have a lot of styling to do.
        Look for the arrow in the cards for the website link 😅
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