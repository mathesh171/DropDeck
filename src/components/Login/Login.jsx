import React from 'react';
import styles from './Login.module.css';

const Login = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  onSubmit,
  error,
  onSwitchToSignup
}) => (
  <div className={styles.loginContainer}>
    <h2 className={styles.title}>DropDeck Login</h2>
    <form className={styles.form} onSubmit={e => { e.preventDefault(); onSubmit(); }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => onEmailChange(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => onPasswordChange(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>Login</button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
    <button className={styles.switchButton} onClick={onSwitchToSignup}>
      Don't have an account? <span>Sign Up</span>
    </button>
  </div>
);

export default Login;
