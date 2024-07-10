// LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    // Here you can implement login logic, e.g., send a request to your backend
    console.log('Login with:', credentials);
    // Replace console.log with actual login logic (e.g., API call)
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
