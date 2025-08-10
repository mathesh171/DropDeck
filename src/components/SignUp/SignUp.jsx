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
  <div className={styles.formCard}>
    <h2>Create account</h2>
    <p>Sign up to start creating temporary chat groups</p>
    <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => onEmailChange(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={e => onPasswordChange(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={e => onConfirmPasswordChange(e.target.value)}
        required
      />
      <button type="submit">Create Account</button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
    <p className={styles.switchText}>
      Already have an account? <span onClick={onSwitchToLogin}>Sign in</span>
    </p>
  </div>
);

export default SignUp;
