import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Login.module.css';

const Login = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  onSubmit,
  error,
  onSwitchToSignup
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
      <h2>Welcome</h2>
      <p>Sign in to access your temporary chat groups</p>
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
        <button type="submit">Sign In</button>
      </form>
      <p className={styles.switchText}>
        <span onClick={onSwitchToSignup}>Don't have an account? </span>
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

export default Login;
