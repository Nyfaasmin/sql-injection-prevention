import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register1 = () => {
  //const [name, setName] = useState('');
  const [username, setUsername] = useState(''); // Changed from email to username
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }), // Send username instead of email
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Registration successful
        //setName('');
        setUsername('');
        setPassword('');
        navigate('/LandingPage');
      } else {
        alert(data.message); // Error message from the backend
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Username:</label> {/* Updated label */}
          <input
            type="text"
            placeholder="Enter your username" // Updated placeholder
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register1;
