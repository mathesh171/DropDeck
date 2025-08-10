import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
}) => {
  React.useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [error]);

  return (
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default SignUp;
