import React from 'react';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.flexTitle}>
      <h1>Alex Spencer</h1>
      <h2>Full Stack Software Developer</h2>
    </div>
    <div className={styles.flexLogos}>
      <a target="blank" href="https://github.com/alexjonspencer1"><img src="src/assets/github_logo.png" /></a>
      <a target="blank" href="https://www.linkedin.com/in/alexjonspencer/"><img src="src/assets/linked_in_logo.png" /></a>
      <a target="blank" href="https://twitter.com/alexjonspencer"><img src="src/assets/twitter_logo.png" /></a>
    </div>
  </header>
);

export default Header;
