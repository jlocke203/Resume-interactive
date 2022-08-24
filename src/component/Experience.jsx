import React from 'react'
import './styles/experience.css'

function Experience() {

  const jobHistory = [
    {
      jobName: 'Csat Solutions',
      title: 'Technician',
      location: 'Houston, Tx',
      date: 'January 2021',
      phrase1: 'I acted quickly, physically, and, mentally to help my team to the absolute best of my ability',
      phrase2: 'I acted quickly, physically, and, mentally to help my team to the absolute best of my ability'
    },
    {
      jobName: 'Freelance WebDev',
      title: 'Software Developer',
      location: 'Houston, Tx',
      date: 'January 2021',
      phrase1: 'I acted quickly, physically, and, mentally to help my team to the absolute best of my ability',
      phrase2: 'I acted quickly, physically, and, mentally to help my team to the absolute best of my ability'
    },
  ]

  return (
    <section className='experience-section hidden' id='experience'>
      <div className='title, hidden' id={'experience-title'}>
        <h2>Experience</h2>
        <hr/>

      </div>
      {
        jobHistory.map((jobData, val)=>{
          return(
            
            <div className='job-container'>
              <div className="job-header">
                <div className="left-header">
                  <p className='jobName'>{jobData.jobName}</p>
                  <p>{jobData.title}</p>
                </div>
                <div className="right-header">
                  <p>{jobData.location}</p>
                  <p>{jobData.date}</p>
                </div>
              </div>
              <div className="job-body">
                <ul>
                  <li>{jobData.phrase1}</li>
                  <li>{jobData.phrase2}</li>
                </ul>
              </div>
            </div> 
          )
        })
      }
    </section>
  )
}

export default Experience