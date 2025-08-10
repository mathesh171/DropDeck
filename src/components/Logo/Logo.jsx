import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="DropDeck Logo" className={styles.logoImage} />
      <h1 className={styles.logoText}>DROPDECK</h1>
    </div>
  );
};

export default Logo;
