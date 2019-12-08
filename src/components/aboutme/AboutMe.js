/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import alexpic from '../../assets/alex-pic.jpg';
import styles from './AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <h1 data-aos="fade-in" className={styles.AboutMeHeader}>About Me //</h1>
      <div className={styles.AboutMe}>
        <div data-aos="fade-in" className={styles.AboutMeFlex}>
          <img src={alexpic} />
        </div>
        <div data-aos="slide-left" className={styles.AboutMeParagraph}>
          <p><span>Full Stack Software Developer</span> inspired to build robust, sleek, and functional applications.</p>
          <p>Background in institutional <span>investment consulting</span> and <span>asset management</span>.</p>
          <p>Proficient in the <span>MERN (MongoDB, Express, React, Node.js)</span> technology stack.</p>
          <div className={styles.ThingsILove}>I love to:
            <ul>
              <li>Adventure with my partner and our dog, Timber.</li>
              <li>Travel to the Oregon Coast, central Oregon, and the Gorge.</li>
              <li>Participate in the sport of triathlon, completing 5 Ironman 70.3 and 1 Ironman 140.6 races.</li>
              <li>Support my favorite teams, the Portland Timbers #RCTID and Arsenal FC #COYG.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
