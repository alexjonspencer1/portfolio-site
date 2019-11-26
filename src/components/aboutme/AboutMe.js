/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import styles from './AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <h1 className={styles.AboutMeHeader}>About Me //</h1>
      <div className={styles.AboutMe}>
        <div className={styles.AboutMeFlex}>
          <img src="https://github.com/alexjonspencer1/portfolio-site/blob/master/src/assets/alex-pic.jpg?raw=true" />
        </div>
        <div className={styles.AboutMeParagraph}>
          <p>
            My name is Alex Spencer and I'm a <span>Full Stack Software Developer</span>. I come to software development after six years 
            in institutional investment <span>consulting and asset management</span>. I am inspired to build robust, sleek, and functional applications 
            that solve real world problems, or just to improve my own day-to-day efficiency <FontAwesomeIcon icon={faSmile} />.
          </p>
          <p>
            I am proficient in the <span>MERN (MongoDB, Express, React, Node.js) technology stack</span>, and have built several applications 
            leveraging this tech stack, as well as a large variety of other tools.
          </p>
          <p>
            In my spare time, I love to adventure with my partner and our dog, Timber. We love traveling to the Oregon Coast, 
            central Oregon, and the Gorge! I participate in the sport of triathlon, having completed 5 Ironman 70.3 and 1 Ironman 
            140.6 races. I'm also an avid Portland Timbers #RCTID and Arsenal FC #COYG fan.
          </p>
          <p>
            Thanks for visiting my site!
          </p>

        </div>
      </div>
    </>
  );
};

export default AboutMe;
