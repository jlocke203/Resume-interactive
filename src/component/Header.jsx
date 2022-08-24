import React from 'react'
import './styles/header.css'

function header() {
  return (
    <section className='header-section'>
      <div className="image-container">
        <img width='200' height='200' src='https://external-preview.redd.it/CQhvzaT7VEB9CWxJgXX8vFmfqUKMSLE0sRlKrTJ_MW0.jpg?auto=webp&s=056113ea01a36174197d401ee022f28f0fabd226'/>
      </div>
      <div className="header-text-container">
        <h1 >Jaden<br/><span className='lastname'>Locke</span></h1>
        <h4> Software Engineering</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto consequatur quae aspernatur quis debitis sequi explicabo mollitia laborum nisi odit nobis expedita quo delectus aut quod consequuntur, possimus quasi.</p>
        <button>Download Resume</button>
      </div>

    </section>
  )
}

export default header