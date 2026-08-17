import React from 'react'
import ProfileImage from '../assets/myimage.jpeg'
import '../Style/Hero.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../App.css';

const Hero = () => {
  return (
   
    <section className='hero'>
      <div className='container-fluid hero-container row align-items-center g-0'>
        <div className='hero-content col-12 col-lg-7'>
      
      <h1>Hi, I'm <span className='name-highlight'>Kavitha</span></h1>
     <p className='tagline'>
            Full Stack Developer
          </p>
          <p className='description'>
            I build end-to-end web applications with Java, Spring Boot, React & SQL. 
            Transitioned from Design to Development to build scalable products.
          </p>
            {/* Social Icons - Idha add pannu */}
          <div className='social-icons'>
            <a href='https://github.com/kavithaarunkumar33011-ai' target='_blank' rel='noopener noreferrer'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/kavitha-arunkumar-5b8745370/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
            <a href='https://twitter.com/yourhandle' target='_blank' rel='noopener noreferrer'>
              <FaTwitter />
            </a>
              <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=kavithaarunkumar33011@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Kavitha,%0A%0A"
    target="_blank"
    rel="noopener noreferrer"
    title="Send Email"
  >
    <MdEmail />
</a>

          </div>
          <div className='hero-buttons'>
            <a href='#about' className='btn-primary'>View Projects</a>
            <a href='../assets/Kavitha_Arunkumar_Resume.pdf' download className='btn-secondary'>
              Download Resume
            </a>
          </div>
        
        </div>

        {/* Right Side - Image */}
        <div className='hero-image col-12 col-lg-5'>
          <div className='profile-glow'>
          <img 
            src={ProfileImage} 
            alt='Kavitha Arunkumar - Full Stack Developer' 
            className='profile-pic img-fluid'
          />
          </div>
        </div>

      </div>
      <div className="scroll-down">
  <a href="#about" >
    <span></span>
    <span></span>
    <span></span>
  </a>
</div>

    </section>
    
  )
}

export default Hero