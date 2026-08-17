import React from 'react'
import '../Style/MySkills.css'
import '../App.css';
const MySkills = () => {

  const techSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Spring Boot", percentage: 80 },
    { name: "SQL", percentage: 75 },
  ];

  const professionalSkills = [
    { name: "Communication", percentage: 90 },
    { name: "Teamwork", percentage: 85 },
    { name: "Problem Solving", percentage: 95 },
    { name: "Creativity", percentage: 80 },
    { name: "Time Management", percentage: 88 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="page-wrapper">
        <div className="section-header">
          <h2>My <span>Skills</span></h2>
          <div className="header-line"></div>
        </div>

        <div className="skills-container row g-4">
          
          {/* Technical Skills Column */}
          <div className="skills-column col-12 col-md-6">
            <h3>Technical Skills</h3>
            {techSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          {/* Professional Skills Column */}
          <div className="skills-column col-12 col-md-6">
            <h3>Professional Skills</h3>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>

        </div>
      </div>
      <div className="scroll-down">
  <a href="#contact">
    <span></span>
    <span></span>
    <span></span>
  </a>
</div>
    </section>
    
  )
}

// Reusable Component - keep this same
const SkillBar = ({ name, percentage }) => {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
    
  )
}

export default MySkills;