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
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={e => onUsernameChange(e.target.value)}
        required
      />
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
    </form>
    <p className={styles.switchText}>
      <span onClick={onSwitchToLogin}>Already have an account? </span>
    </p>
  </div>
);

export default SignUp;
