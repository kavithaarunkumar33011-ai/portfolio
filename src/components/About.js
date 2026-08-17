import React from 'react'
import '../Style/About.css'
import ProfileImage from '../assets/myimage.jpeg'
import '../App.css';

  const About = () => {
  return (
     <section id="about" className="about-section">
  <div className="page-wrapper">
    <div className="section-header">
      <h2>About <span>Me</span></h2>
      <div className="header-line"></div>
    </div>

    <div className="about-content row g-4 align-items-center">
      <div className="about-img col-12 col-md-4">
        <img src={ProfileImage} alt="Profile" className="img-fluid" />
      </div>
      
      <div className="about-text col-12 col-md-8">
        <h3>Who am I?</h3>
        <p>
  I'm a <strong>Full Stack Developer</strong> with a background in <strong>UI/UX Design</strong>.
</p>
<p>
  I transitioned to development to build complete products end-to-end. 
  I specialize in <strong>Java, Spring Boot, React, and SQL</strong> to create scalable, user-friendly applications.
</p>
<p>
  My design experience ensures the code I write results in products that are both powerful and a joy to use.
</p>
        <div className="about-info">
          <div>
            <p><b>Name:</b> Kavitha Arunkumar</p>
            <p><b>Email:</b> kavithaarunkumar33011@gmail.com</p>
            <p><b>Phone:</b> 9080042787</p>
          </div>
          <div>
            <p><b>Age:</b> 36</p>
            <p><b>Experience:</b> 7+year </p>
            <p><b>Location:</b> Chennai, India</p>
          </div>
        </div>

        <div className="about-buttons">
          
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
        <div className="scroll-down">
  <a href="#Myskills" className="scroll-link">
    <span></span>
    <span></span>
    <span></span>
  </a>
</div>
      </div>
    </div>
  </div>
  
</section>

  )
  }
export default About