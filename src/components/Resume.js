import React, { useState } from 'react';
import Navbar from './Navbar';
import './Resume.css';

const Resume = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <div className={`resume-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="resume-container">
        <div className="resume-content">
          <h1>KORLAPATI VARUN</h1>
          <p>Athens, GA - 30605 | korlapativarun05@gmail.com | +1 (401) 666-9430</p>

          <h2>SUMMARY OF QUALIFICATIONS</h2>
          <p>
            A highly skilled and results-oriented Full Stack Developer with over 3 years of hands-on experience in backend engineering, frontend development, and cloud-native application design. Adept at utilizing a wide range of technologies such as Java (8/11), JavaScript (ES6+), TypeScript, SQL, PL/SQL, Spring Boot, Spring MVC, React.js, Angular, and MySQL to build scalable, secure, and high-performance applications. Proficient in developing distributed, microservices-based systems using Spring Boot, Spring Cloud, and Node.js, and implementing robust RESTful APIs and Microservices architectures. Experienced in optimizing data models, managing databases like MySQL, PostgreSQL, MongoDB, Oracle 11g, and Redis, and applying Hibernate (JPA) for efficient data handling. Hands-on expertise in building cloud-based systems leveraging AWS services (EC2, S3, Lambda, IAM, ECS, SNS) and containerization technologies like Docker and Kubernetes, ensuring smooth deployment processes with CI/CD pipelines using Jenkins and Terraform. Well-versed in developing secure applications using Spring Security, JWT, and OAuth2 for secure authentication and authorization. Proficient in frontend development with React.js, Angular, and Material-UI to deliver dynamic, responsive user interfaces. Knowledgeable in implementing AJAX, Bootstrap, and WebSockets for real-time functionality and seamless user experiences. Experienced in following Agile methodologies (Scrum, Kanban) and applying Test-Driven Development (TDD) practices to ensure high-quality, reliable software. Strong collaboration skills with experience working in cross-functional teams, driving innovation and delivering solutions that meet business needs. Skilled in Version Control using Git, GitHub, and Bitbucket, as well as utilizing Postman, SOAP UI, and JUnit for testing and ensuring application performance and reliability. Experienced in designing Event-Driven Architectures using technologies like JMS, Kafka, and RabbitMQ to support asynchronous messaging, optimizing scalability and performance in high-demand environments.
          </p>

          <h2>EDUCATION</h2>
          <p>
            <strong>Rivier University — Nashua, NH</strong><br />
            Master of Science in Computer Science | GPA: 3.66/4.0 | May 2024
          </p>
          <p>
            <strong>Vellore Institute of Technology — Amaravati, India</strong><br />
            Bachelor of Technology in Computer Science and Engineering | GPA: 3.2/4.0 | May 2022
          </p>

          <h2>PROFESSIONAL EXPERIENCE</h2>
          <div className="experience-item">
            <h3>Software Developer, CVS Health, Remote</h3>
            <p>Dec 2022 – present</p>
            <ul>
              <li>Developed and deployed Spring Boot microservices in Docker containers on AWS EC2, using Jenkins for CI/CD automation and AWS ECS for container orchestration.</li>
              <li>Designed scalable, distributed systems with Spring Boot, Spring Cloud, and Spring MVC, ensuring optimal performance.</li>
              <li>Developed Struts-based Action classes and form beans, adhering to MVC design patterns for clean architecture.</li>
              <li>Built dynamic dropdown lists in React with AJAX for enhanced interactivity.</li>
              <li>Integrated Oracle 11g with JDBC for database connectivity, including writing PL/SQL stored procedures for efficient data handling.</li>
              <li>Created and tested REST APIs to support Agile user stories, improving backend functionalities.</li>
              <li>Implemented multi-threading for concurrent operations, and JWT for secure authentication and authorization.</li>
              <li>Integrated JMS for asynchronous messaging in microservices, improving communication and scalability.</li>
              <li>Deployed microservices on AWS Cloud and utilized Spring Security for secure operations.</li>
              <li>Performed testing using SOAP UI for SOAP web services and Postman for REST API validation.</li>
              <li>Used Git for version control and collaborated on CI/CD pipelines for automated deployment.</li>
              <li>Engaged in unit testing with JUnit and TDD practices, ensuring reliable code quality.</li>
              <li>Configured AWS services like EC2, IAM, and SNS for scalable infrastructure.</li>
              <li>Built AWS Lambda functions to streamline data processing and orchestration.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Software Development Intern, HCL Technologies, Hyderabad</h3>
            <p>Jan 2022 – May 2022</p>
            <ul>
              <li>Worked on a workflow optimization platform to enhance operational efficiency and user experience.</li>
              <li>Built backend services using Java Spring Boot, ensuring scalability and reliability in service architecture.</li>
              <li>Developed and integrated RESTful APIs, supporting seamless data exchange between frontend and backend systems.</li>
              <li>Optimized database queries and improved performance, reducing response times by 20% and ensuring efficient data retrieval.</li>
              <li>Collaborated with cross-functional teams to ensure that solutions were aligned with business objectives and deadlines.</li>
            </ul>
          </div>

          <h2>SKILLS</h2>
          <p>
            <strong>Programming Languages:</strong> Java (8/11), JavaScript (ES6+), TypeScript, SQL, PL/SQL, Python<br />
            <strong>Frontend Development:</strong> React.js, Angular, HTML5, CSS3, AJAX, Bootstrap, Material-UI<br />
            <strong>Backend Development:</strong> Spring Boot, Spring MVC, Spring Cloud, Struts, RESTful APIs, Microservices, Node.js, Express.js<br />
            <strong>Databases:</strong> MySQL, PostgreSQL, Oracle 11g, MongoDB, Redis, Hibernate (JPA)<br />
            <strong>Cloud & DevOps:</strong> AWS (EC2, Lambda, S3, IAM, SNS, ECS), Docker, Jenkins, Terraform, Kubernetes<br />
            <strong>Tools & Testing:</strong> Postman, SOAP UI, JUnit, Mockito, Git, GitHub, Jira, AWS Admin Console<br />
            <strong>Security:</strong> Spring Security, JWT (JSON Web Tokens), OAuth2<br />
            <strong>Version Control & Collaboration:</strong> Git, GitHub, Bitbucket<br />
            <strong>Methodologies:</strong> Agile (Scrum, Kanban), Test-Driven Development (TDD), Continuous Integration/Continuous Deployment (CI/CD)<br />
            <strong>Web Technologies:</strong> RESTful APIs, SOAP, AJAX, WebSockets, JSON<br />
            <strong>Messaging & Event-Driven Architecture:</strong> JMS, Kafka, RabbitMQ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
