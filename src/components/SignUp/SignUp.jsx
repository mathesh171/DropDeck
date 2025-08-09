import React from 'react';
import styles from './SignUp.module.css';

const SignUp = ({
  username,
  onUsernameChange,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  confirmPassword,
  onConfirmPasswordChange,
  onSubmit,
  error,
  onSwitchToLogin
}) => (
  <div className={styles.signupContainer}>
    <h2 className={styles.title}>DropDeck Sign Up</h2>
    <form className={styles.form} onSubmit={e => { e.preventDefault(); onSubmit(); }}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => onUsernameChange(e.target.value)}
        className={styles.input}
        required
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={e => onConfirmPasswordChange(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>Sign Up</button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
    <button className={styles.switchButton} onClick={onSwitchToLogin}>
      Already have an account? <span>Login</span>
    </button>
  </div>
);

export default SignUp;
