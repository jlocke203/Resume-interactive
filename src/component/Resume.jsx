import React from 'react'
import Header from './Header'
import Position from './Position'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Education from './Education'
import Personal from './Personal'
import Footer from './Footer'
import { useEffect } from 'react'

class Resume extends React.Component {

  componentDidMount(){
    window.addEventListener('scroll', this.checkPosition);
}

  checkPosition = () => {
    var elements = [
      document.getElementById('education'),
      document.getElementById('experience'),
      document.getElementById('project0'),
      document.getElementById('project1'),
      document.getElementById('project2'),
      document.getElementById('project-title'),
      document.getElementById('education-title'),
      document.getElementById('experience-title')
    ]
    for(var i = 0; i < elements.length; i++){
        var element = elements[i]
        var positionFromTop = elements[i].getBoundingClientRect().top;

        if(positionFromTop - window.innerHeight <= -100) {
          element.classList.add('start');
          element.classList.remove('hidden');
        }
    }
  }

  render() {
    return (
      <div className="resume-container">
          <Header />
          <div className='first-container'>
            <Skills />
            <Position />
          </div>
          <Projects />
          <Experience />
          <Education />
          <Personal />
          <Footer />
      </div>
    )
  }
}

export default Resume
