/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare, faFile } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
  return (
    <div data-aos="fade">
      <h1 className={styles.ContactMeHeader}>Contact Me //</h1>
      <div className={styles.ContactDiv}>
        <h2>Let's get in touch!</h2>
        <div className={styles.ContactDivFlex}>
          <div>
            <a target="blank" href="mailto:alexander.j.spencer@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a> <p>alexander.j.spencer@gmail.com</p>
            <br></br>
            <FontAwesomeIcon className={styles.PhoneIcon} icon={faPhoneSquare} /> <p> Phone: 971-322-4233</p>
            <br></br>
            <a target="blank" href="https://drive.google.com/file/d/1s9OBBjaqwJKKGX80FCh4o_msyffqKbXv/view"><FontAwesomeIcon icon={faFile} /></a> <p className={styles.DocumentText}>Check out my resume!</p>
          </div>
          <div className={styles.SocialIconsContainer}>
            <a className={styles.SocialIcon} target="blank" href="https://github.com/alexjonspencer1"><FontAwesomeIcon icon={faGithub} /></a>
            <a className={styles.SocialIcon} target="blank" href="https://www.linkedin.com/in/alexjonspencer/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className={styles.SocialIcon} target="blank" href="https://twitter.com/alexjonspencer"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
