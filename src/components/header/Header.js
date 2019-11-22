import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.flexTitle}>
      <h1>Alex Spencer</h1>
      <h2>Full Stack Software Developer</h2>
    </div>
    <div className={styles.flexLogos}>
      <a target="blank" href="mailto:alexander.j.spencer@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      <a target="blank" href="https://github.com/alexjonspencer1"><FontAwesomeIcon icon={faGithub} /></a>
      <a target="blank" href="https://www.linkedin.com/in/alexjonspencer/"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a target="blank" href="https://twitter.com/alexjonspencer"><FontAwesomeIcon icon={faTwitter} /></a>
      <div className={styles.phoneImage}>
        <FontAwesomeIcon icon={faPhoneSquare} />
        <p>971-322-4233</p>
      </div>
    </div>
  </header>
);

export default Header;
