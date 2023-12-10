import React from 'react'
import './Projects.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { fetchProjects } from '../store/ProjectsSlice'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
    console.log(projects)
  }, [])

  return (
    <div className='projects' id='projects'>
       <h1 className='title projects-title'>Projects</h1>
      <p className='projects-para'>
        Here are deployments. I have the functionality working, but the styling will be constant updates.
      </p>
      <div className="projects-container">
        {
          projects.map((project, id) => (
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