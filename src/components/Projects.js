
import React from 'react'
import ProjectData from '../data/ProjectData'  // Capital P, { } illa
import '../Style/Projects.css'
import '../App.css';

const Projects = () => {
  return (
    
    <section id="projects" className='projects-section'>
     <h1>My <span>Projects</span></h1>
      <div className='header-line'></div>
      <div className='projects-grid row g-4'>
        {ProjectData.map((project) => (
          <div key={project.id} className='col-12 col-sm-6 col-lg-4'>
            <div className='project-card h-100'>
            <img src={project.imageUrl} alt={project.title} className='img-fluid' />
            <h2>{project.title}</h2>
            <h3>{project.description}</h3>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
  
            <div className="project-links">
              {/* View Project = Live Link ku poganum */}
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-live"
              >
                View Project 🚀
              </a>
              
              <a 
                href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-code"
              >
                GitHub Code 💻
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  )
}
export default Projects;