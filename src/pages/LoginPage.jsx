import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import styles from '../pageStyles/LoginPage.module.css'; 
import axios from 'axios';

const LoginPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost/auth-backend/login.php', {
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
      const response = await axios.post('http://localhost/auth-backend/signup.php', {
        username, email, password
      });
      const data = response.data;
      if (data.success) {
        alert('Signup successful! Please check your Gmail for verification.');
        setIsLoginMode(true);
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Signup error: ' + err.message);
    }
  };

  return (
    <div className={styles.pageBackground}>
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
  );
};

export default LoginPage;
