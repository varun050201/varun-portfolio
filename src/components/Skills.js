import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faJs,
  faPython,
  faReact,
  faAngular,
  faHtml5,
  faCss3,
  faAws,
  faDocker,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faTools,
  faShieldAlt,
  faCodeBranch,
  faCogs,
  faCloud,
  faServer,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Update the body class whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`skills-page ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} />
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-category">
            <h2>Programming Languages</h2>
            <div className="skill-icons">
              <div className="skill-item" title="Java (8/11)">
                <FontAwesomeIcon icon={faJava} size="3x" />
                <p>Java (8/11)</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="JavaScript (ES6+)">
                <FontAwesomeIcon icon={faJs} size="3x" />
                <p>JavaScript (ES6+)</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="TypeScript">
                <FontAwesomeIcon icon={faJs} size="3x" />
                <p>TypeScript</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="SQL">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>SQL</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="PL/SQL">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>PL/SQL</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Python">
                <FontAwesomeIcon icon={faPython} size="3x" />
                <p>Python</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="skill-category">
            <h2>Frontend Development</h2>
            <div className="skill-icons">
              <div className="skill-item" title="React.js">
                <FontAwesomeIcon icon={faReact} size="3x" />
                <p>React.js</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Angular">
                <FontAwesomeIcon icon={faAngular} size="3x" />
                <p>Angular</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="HTML5">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <p>HTML5</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="CSS3">
                <FontAwesomeIcon icon={faCss3} size="3x" />
                <p>CSS3</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="skill-category">
            <h2>Backend Development</h2>
            <div className="skill-icons">
              <div className="skill-item" title="Spring Boot">
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>Spring Boot</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Spring MVC">
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>Spring MVC</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Spring Cloud">
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>Spring Cloud</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Struts">
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>Struts</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="RESTful APIs">
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>RESTful APIs</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Microservices">
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>Microservices</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Node.js">
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                <p>Node.js</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Express.js">
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>Express.js</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <h2>Databases</h2>
            <div className="skill-icons">
              <div className="skill-item" title="MySQL">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>MySQL</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="PostgreSQL">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>PostgreSQL</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Oracle 11g">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>Oracle 11g</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="MongoDB">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>MongoDB</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Redis">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>Redis</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Hibernate (JPA)">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>Hibernate (JPA)</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="skill-category">
            <h2>Cloud & DevOps</h2>
            <div className="skill-icons">
              <div className="skill-item" title="AWS">
                <FontAwesomeIcon icon={faAws} size="3x" />
                <p>AWS</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Docker">
                <FontAwesomeIcon icon={faDocker} size="3x" />
                <p>Docker</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Jenkins">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>Jenkins</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Terraform">
                <FontAwesomeIcon icon={faCogs} size="3x" />
                <p>Terraform</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Kubernetes">
                <FontAwesomeIcon icon={faCloud} size="3x" />
                <p>Kubernetes</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Testing */}
          <div className="skill-category">
            <h2>Tools & Testing</h2>
            <div className="skill-icons">
              <div className="skill-item" title="Postman">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>Postman</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="SOAP UI">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>SOAP UI</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="JUnit">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>JUnit</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Mockito">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>Mockito</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Git">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>Git</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="GitHub">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>GitHub</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Jira">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>Jira</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="AWS Admin Console">
                <FontAwesomeIcon icon={faTools} size="3x" />
                <p>AWS Admin Console</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="skill-category">
            <h2>Security</h2>
            <div className="skill-icons">
              <div className="skill-item" title="Spring Security">
                <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                <p>Spring Security</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="JWT (JSON Web Tokens)">
                <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                <p>JWT (JSON Web Tokens)</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="OAuth2">
                <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                <p>OAuth2</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Version Control & Collaboration */}
          <div className="skill-category">
            <h2>Version Control & Collaboration</h2>
            <div className="skill-icons">
              <div className="skill-item" title="Git">
                <FontAwesomeIcon icon={faCodeBranch} size="3x" />
                <p>Git</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="GitHub">
                <FontAwesomeIcon icon={faCodeBranch} size="3x" />
                <p>GitHub</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Bitbucket">
                <FontAwesomeIcon icon={faCodeBranch} size="3x" />
                <p>Bitbucket</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Methodologies */}
          <div className="skill-category">
            <h2>Methodologies</h2>
            <div className="skill-icons">
              <div className="skill-item" title="Agile (Scrum, Kanban)">
                <FontAwesomeIcon icon={faCogs} size="3x" />
                <p>Agile (Scrum, Kanban)</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="Test-Driven Development (TDD)">
                <FontAwesomeIcon icon={faCogs} size="3x" />
                <p>Test-Driven Development (TDD)</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" title="CI/CD">
                <FontAwesomeIcon icon={faCogs} size="3x" />
                <p>CI/CD</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Technologies */}
          <div className="skill-category">
            <h2>Web Technologies</h2>
            <div className="skill-icons">
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>RESTful APIs</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>SOAP</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>AJAX</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>WebSockets</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>JSON</p>
              </div>
            </div>
          </div>

          {/* Messaging & Event-Driven Architecture */}
          <div className="skill-category">
            <h2>Messaging & Event-Driven Architecture</h2>
            <div className="skill-icons">
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>JMS</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>Kafka</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <p>RabbitMQ</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/resume" className="arrow-link">
          <div className="arrow">&#x2192;</div>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
