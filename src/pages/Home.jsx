import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();  
  const handle = () => {
    localStorage.setItem("isLoggedIn", "false");
    console.log('Logout');
    navigate('/');
  }


  return (
    <div onClick={handle}> 
      Home
    </div>
  )
}

export default Home;
