import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import heartbot from '../../assets/heartbot-bb.jpg';
import tonecheck from '../../assets/tone-check.jpg';
import dejabrew from '../../assets/deja-brew.jpg';
import styles from './Projects.css';

const Projects = () => {
  return (
    <>
      <h1 data-aos="fade" className={styles.ProjectsHeader}>My Work //</h1>
      <div data-aos="slide-right" className={styles.ProjectHeaderInformation}>
        <h2>@HEARTBOTBB</h2>
        <div className={styles.ProjectHeaderFlex}>
          <a target="blank" href="https://heartbotbb.herokuapp.com/"><p>Deployed Site</p></a>
          <p className={styles.ProjectHeaderFlexDots}>::</p>
          <a target="blank" href="https://github.com/Healing-HeartBot/healing-heart-bot"><p>GitHub Repository</p></a>
        </div>
      </div>
      <div data-aos="fade" className={styles.ProjectDetails}>
        <img src={heartbot} />
        <div data-aos="slide-left">
          <h2>Tech Stack</h2>
          <h3> <FontAwesomeIcon icon={faAngleDoubleRight} /> Node.js, Express, MongoDB, mongoose</h3>
          <p>
            HeartbotBB is a Twitter bot created with a predominantly back-end tech stack
            that leverages the Twit npm package. The bot was built over five days, alongside
            four Alchemy contributors. The team also developed a front end for interaction
            with users who do not have Twitter. Data aggregations were applied to the tweets
            themselves, allowing the team to track tweet trends.
          </p>
        </div>
      </div>

      <div data-aos="slide-right" className={styles.ProjectHeaderInformation}>
        <h2>TONE CHECK</h2>
        <div className={styles.ProjectHeaderFlex}>
          <a target="blank" href="http://tone-check.herokuapp.com/"><p>Deployed Site</p></a>
          <p className={styles.ProjectHeaderFlexDots}>::</p>
          <a target="blank" href="https://github.com/mood-mangoes/mood-mangoes.github.io"><p>GitHub Repository</p></a>
        </div>
      </div>
      <div data-aos="fade" className={styles.ProjectDetails}>
        <img src={tonecheck} />
        <div data-aos="slide-left">
          <h2>Tech Stack</h2>
          <h3> <FontAwesomeIcon icon={faAngleDoubleRight} /> Node.js, Express, PostgreSQL</h3>
          <p>
            The Tone Check application takes in a body of text, and subsequently analyzes
            the input at both the document and sentence level, leveraging the IBM Watson
            Tone Analyzer API. The application also features user authorization and displays
            historical user-specific submissions, as well as all-time user submissions. This
            application was built alongside three Alchemy contributors over the course of
            five days.
          </p>
        </div>
      </div>

      <div data-aos="slide-right" className={styles.ProjectHeaderInformation}>
        <h2>DEJA BREW</h2>
        <div className={styles.ProjectHeaderFlex}>
          <a target="blank" href="https://team-caffeine.github.io/"><p>Deployed Site</p></a>
          <p className={styles.ProjectHeaderFlexDots}>::</p>
          <a target="blank" href="https://github.com/team-caffeine/team-caffeine.github.io"><p>GitHub Repository</p></a>
        </div>
      </div>
      <div data-aos="fade" className={styles.ProjectDetails}>
        <img src={dejabrew} />
        <div data-aos="slide-left">
          <h2>Tech Stack</h2>
          <h3> <FontAwesomeIcon icon={faAngleDoubleRight} /> JavaScript, HTML, CSS</h3>
          <p>
            A vanilla JavaScript application that aims to help users memorize popular coffee
            drinks and teach them how to make them (i.e., which ingredients in which order).
            Beyond study and practice modes, users can also play a game mode that tests
            their knowledge in a race against the clock. User data is stored via session and
            local storage to show successfully created drinks for the session, as well as over
            time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;