import React from 'react'

const handle = () => {
  localStorage.setItem("isLoggedIn", "true");
  console.log('Login')
}

export default function Login() {
  return (
    <div onClick={handle}>
      Hi
    </div>
  )
}
