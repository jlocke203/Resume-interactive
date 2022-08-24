import React from 'react'
import './styles/project.css'

function Projects() {

  const projects = [
{
    projectName: 'Project1',
    projectDescription: 'A CodePen clone, allowing users to log in create, and save projects all with a seamless experience',
    phrase1: 'Created a fully functioning CodePen clone using the Code Mirror API, JWT auth, and Material-UI',
    phrase2: 'Utilized JWT authentication to provide a safe and secure login for the users', 
    phrase3: 'Implemented Material-UI to create a seamless experience for my users',
    githubLink: '',
    demoLink: ''
  },
  {
    projectName: 'Project2',
    projectDescription: 'A CodePen clone, allowing users to log in create, and save projects all with a seamless experience',
    phrase1: 'Created a fully functioning CodePen clone using the Code Mirror API, JWT auth, and Material-UI',
    phrase2: 'Utilized JWT authentication to provide a safe and secure login for the users', 
    phrase3: 'Implemented Material-UI to create a seamless experience for my users',
    githubLink: '',
    demoLink: '' 
  },
  {
    projectName: 'Project3',
    projectDescription: 'A CodePen clone, allowing users to log in create, and save projects all with a seamless experience',
    phrase1: 'Created a fully functioning CodePen clone using the Code Mirror API, JWT auth, and Material-UI',
    phrase2: 'Utilized JWT authentication to provide a safe and secure login for the users', 
    phrase3: 'Implemented Material-UI to create a seamless experience for my users',
    githubLink: '',
    demoLink: '' 
  }
]
  return (
    <section className='projects-container'>
      <div className='title, hidden' id={'project-title'}>
        <h2>Projects</h2>
        <hr/>

      </div>
      {projects.map((projectData, val)=>{
        return(
          <div className='project-container hidden' id={'project'+val}>
            <div className='project-header'>
              <h4>{projectData.projectName}</h4> -
              <a href ={projectData.githubLink}>Github</a> |
              <a href ={projectData.demoLink}>Demo</a>
            </div>
            <div className='project-body'>
              <p>{projectData.projectDescription}</p>
              <ul>
                <li>{projectData.phrase1}</li>
                <li>{projectData.phrase2}</li>
                <li>{projectData.phrase3}</li>
              </ul>
            </div>
           
          </div>
        )
      })}

    </section>
  )
}

export default Projects