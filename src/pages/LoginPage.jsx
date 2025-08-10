import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import ToastContainerComponent from '../components/Tostify/Tostify';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Logo from '../components/Logo/Logo';
import styles from '../pageStyles/LoginPage.module.css'; 
import axios from 'axios';

const LoginPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
      setError('');
    }
  }, [error]);

  useEffect(() => {
    if (signupSuccess) {
      toast.success('Signup successful! Please check your Gmail for verification.', {
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
      setSignupSuccess(false);
      setIsLoginMode(true);
    }
  }, [signupSuccess]);

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth-backend/login.php', {
        params: { email, password }
      });
      const data = response.data;
      if (data.success) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Login error: ' + err.message);
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/auth-backend/signup.php', {
        username, email, password
      });
      const data = response.data;
      if (data.success) {
        setSignupSuccess(true);
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Signup error: ' + err.message);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.leftPanel}>
        <Logo/>
        <div className={styles.icon}></div>
        <h1>Temporary Chat & File Sharing</h1>
        <p>Create secure, time-limited chat groups for temporary collaboration.</p>
        <ul>
          <li>⏱ Auto-expiring groups</li>
          <li>👥 Invite team members</li>
          <li>💬 Share files securely</li>
        </ul>
      </div>
      <div className={styles.rightPanel}>
        {isLoginMode ? (
          <Login
            email={email}
            onEmailChange={setEmail}
            password={password}
            onPasswordChange={setPassword}
            onSubmit={handleLogin}
            error={error}
            onSwitchToSignup={() => setIsLoginMode(false)}
          />
        ) : (
          <SignUp
            username={username}
            onUsernameChange={setUsername}
            email={email}
            onEmailChange={setEmail}
            password={password}
            onPasswordChange={setPassword}
            confirmPassword={confirmPassword}
            onConfirmPasswordChange={setConfirmPassword}
            onSubmit={handleSignup}
            error={error}
            onSwitchToLogin={() => setIsLoginMode(true)}
          />
        )}
      </div>
      <ToastContainerComponent />
    </div>
  );
};

export default LoginPage;
