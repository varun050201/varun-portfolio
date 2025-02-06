import React, { useState } from 'react';
import Navbar from './Navbar';
import './About.css';

const About = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`about-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-container">
        <div className="about-image">
          <img src="myphoto.jpg" alt="Your Name" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I am a highly skilled and results-oriented Full Stack Developer with over 3 years of hands-on experience in backend engineering, frontend development, and cloud-native application design. I am adept at utilizing a wide range of technologies such as Java (8/11), JavaScript (ES6+), TypeScript, SQL, PL/SQL, Spring Boot, Spring MVC, React.js, Angular, and MySQL to build scalable, secure, and high-performance applications.
          </p>
          <p>
            I am proficient in developing distributed, microservices-based systems using Spring Boot, Spring Cloud, and Node.js, and implementing robust RESTful APIs and Microservices architectures. I have experience in optimizing data models, managing databases like MySQL, PostgreSQL, MongoDB, Oracle 11g, and Redis, and applying Hibernate (JPA) for efficient data handling.
          </p>
          <p>
            I have hands-on expertise in building cloud-based systems leveraging AWS services (EC2, S3, Lambda, IAM, ECS, SNS) and containerization technologies like Docker and Kubernetes, ensuring smooth deployment processes with CI/CD pipelines using Jenkins and Terraform. I am well-versed in developing secure applications using Spring Security, JWT, and OAuth2 for secure authentication and authorization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
