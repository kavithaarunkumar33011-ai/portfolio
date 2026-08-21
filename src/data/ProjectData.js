import React from 'react'
import weatherAppImg from '../assets/weatherapp.png'
import stockVisionImg from '../assets/stockvision.png' 
import sripadmajewelleryImg from '../assets/sripadmajewellery.png';
import nithwinengineeringImg from '../assets/NithwinEngineering.png';


const ProjectData = [
    {
        id: 1,  
        title: "Weather-App Project",
        description: "Real-time Weather Dashboard",
        techStack: "React.js, JavaScript, OpenWeather API, Tailwind CSS, Axios",
        
        imageUrl: weatherAppImg,
        projectUrl: "https://kavithaarunkumar33011-ai.github.io/WeatherApp/",
        githubUrl: "https://github.com/kavithaarunkumar33011-ai/WeatherApp.git"
    },  
    {
        id: 2,
        title: "StockVision Project ", 
        description: "Real-Time Stock Market Dashboard",
        techStack: "React.js, JavaScript (ES6+), HTML5, CSS3, Chart.js",
        
        imageUrl: stockVisionImg, // nee screenshot eduthu assets la podu
        projectUrl: "https://kavithaarunkumar33011-ai.github.io/stockvision/", // live link irundha podu
        githubUrl: "https://github.com/kavithaarunkumar33011-ai/StockVision" // backend repo link
    },
    {
        id: 3,
        title: "Ecommerce Website - Full Stack Project",
        description: "Developed a full-stack e-commerce platform.",
        techStack: "React.js, Bootstrap, Java, Spring Boot, Spring Security, REST API, Oracle SQL/PLSQL, Razorpay Integration, Git",
        
        imageUrl: sripadmajewelleryImg, // portfolio screenshot
        projectUrl: "http://jewellery-ui.vercel.app", // live link
        githubUrl: "https://github.com/kavithaarunkumar33011-ai/padmajewellery" // frontend repo link
    },
    {
        id: 4,
        title: "Nithwin Engineering-Manufacturing Website",
        description: "Designed and developed a responsive corporate website.",
        techStack: "Html, CSS, JavaScript, React.js, Bootstrap, Git, Vercel",
        
        imageUrl: nithwinengineeringImg, // portfolio screenshot
        projectUrl: "https://nithwin-engineering.vercel.app/", // live link
        githubUrl: "https://github.com/kavithaarunkumar33011-ai/NithwinEngineering" // frontend repo link
    }
]

export default ProjectData;