import React from 'react';
import styles from './Techstack.css';

const Techstack = () => {
  return (
    <>
      <h1 className={styles.TechStackHeader}>My Tech Stack //</h1>
      <section className={styles.FlexSkillsSection}>
        <ul className={styles.TechstackUL}>
          <li>
            <h2>Languages ::</h2>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </li>
          <li>
            <h2>Back End ::</h2>
            <p>Node.js</p>
            <p>Express</p>
            <p>CLI</p>
          </li>
          <li>
            <h2>Front End ::</h2>
            <p>React</p>
            <p>Redux</p>
          </li>
          <li>
            <h2>Testing Suites ::</h2>
            <p>Jest</p>
            <p>QUnit</p>
          </li>
          <li>
            <h2>Databases ::</h2>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>mongoose</p>
          </li>
          <li>
            <h2>Tools ::</h2>
            <div className={styles.Flex}>
              <div>
                <p>GitHub</p>
                <p>Git</p>
                <p>VSCode</p>
                <p>Heroku</p>
              </div>
              <div className={styles.Overflow}>
                <p>Slack</p>
                <p>Compass</p>
                <p>Postman</p>
                <p>Netlify</p>
              </div>
            </div>
          </li>
          <li>
            <h2>Dev Practices ::</h2>
            <p>Test-Driven Development</p>
            <p>Design-Driven Development</p>
            <p>Pair/Mob Programming</p>
          </li>
          <li>
            <h2>Others ::</h2>
            <p>REST APIs</p>
            <p>Responsive Web Design</p>
          </li>

        </ul>
      </section>
    </>
  );
};

export default Techstack;
