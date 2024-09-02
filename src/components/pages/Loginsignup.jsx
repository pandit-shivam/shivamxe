import React, { useState } from 'react';
import './css/loginsingup.css';

const Loginsignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    console.log("Form Data:", formData);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, ${errorData.message}`);
      }

      const responseData = await response.json();
      console.log('Response Data:', responseData);
    } catch (error) {
      console.error('Error during signup:', error.message || error);
    }
  };

  return (
    <div className="loginsingup">
      <div className="loginsing-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-feild">
          <input
            name='username'
            value={formData.username}
            onChange={changeHandler}
            type="text"
            placeholder='Your Name'
          />
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email Address'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
          />
        </div>
        <button onClick={signup}>Continue</button>
      </div>
    </div>
  );
}

export default Loginsignup;
