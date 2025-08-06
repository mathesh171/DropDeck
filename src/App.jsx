import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Login from './pages/Login'
import Home from './pages/Home'

const isAuthenticated = () =>{
  return localStorage.getItem("isLoggedIn") === "true";
}

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
    }
  }, []);

  return isAuthenticated() ? children : null;
};

const App = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
      navigate('/home');
  }
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path={"/home"} element={<PrivateRoute> <Home/> </PrivateRoute>}/>


      <Route path="*" element={
        <div style={{padding: '20px', textAlign: 'center'}}>
              <h2>404 - Page Not Found</h2>
              <p>The page you're looking for doesn't exist.</p>
              <button onClick={handleClick}>Return to Home</button>
        </div>} 
      />
    </Routes>
  );
}

export default App;