import React from 'react'
import './styles/education.css'

function Education() {
  const education = [
    {
      name: 'Clear Springs HS',
      type: 'STEM',
      location: 'League City, Texas',
      date: '06/ 2020'
    },
    {
      name: 'Flatiron School',
      type: 'Full Stack Web Development, Ruby on Rails and React. ',
      location: 'Houston, Texas',
      date: '08/ 2020 - 12/2020'
    }
  ]


  return (
    <section className='education-section hidden' id='education'>
       <div className='title, hidden' id={'education-title'}>
        <h2>Education</h2>
        <hr/>

      </div>
        {
          education.map((educationData, val)=>{
            return(
              <div className="education">
                 <div className="education-left">
                 <p className='edu-name'>
                  {educationData.name}
                 </p>
                   <p>
                    {educationData.type}
                  </p>
              </div>
            <div className="education-right">
                <p>
                  {educationData.location}
                </p>
                <p>
                  {educationData.date}
                </p>
             </div>
              </div>
            )
          })
        }
    </section>
  )
}


export default Education