import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaNpm} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiSpring} from 'react-icons/si';
//import { SiKubernetes } from 'react-icons/si';
import { FaTools } from "react-icons/fa";

import '../Style/ToolsandTech.css';

const ToolsandTech = () => {

  const tools = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
    { name: "Spring", icon: <SiSpring color="#6DB33F" /> },
   
    { name: "Git", icon: <FaGit color="#F05032" /> },
    { name: "npm", icon: <FaNpm color="#CB3837" /> },
    
    { name: "Eclipse", icon: <FaTools color="#a913df" /> },
 { name: "VS Code", icon: <VscCode color="#007ACC" /> }
   
  ];

  return (
    <section id="tools" className="tools-section">
      <div className="page-wrapper">
        <div className="section-header">
          <h2>Tools & <span>Technologies</span></h2>
          <div className="header-line"></div>
        </div>

        <div className="tools-grid row g-3">
          {tools.map((tool, index) => (
            <div key={index} className="col-6 col-sm-4 col-lg-2">
              <div className="tool-card h-100">
              <div className="tool-icon">{tool.icon}</div>
              <p>{tool.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsandTech;
