import React from 'react'
import './styles/personal.css'
import { FaGoogle, FaTiktok, FaAmazon } from 'react-icons/fa'
import { TbBrandMeta } from "react-icons/tb";
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Personal() {
  return (
    <section className='personal-section'>
        <div className='tech-container'>
          <h3>Tech Interests</h3>
          <div className="icon">
            <FaGoogle size={25} className='google' />
            <FaTiktok size={25} className='tiktok' />
            <TbBrandMeta size={35} className='meta' />
            <FaAmazon size={28} className='amazon' />
          </div>
        </div>
        <div className="socials-container">
          <h3>Checkout my socials</h3>
          <div className="icon">
            <a><FaLinkedin size={30} className='linkedin' /></a>
            <a><FaGithub size={30} className='github'/></a>
          </div>
      </div>
    </section>
  )
}

export default Personal
