import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setCurrentUser }) {
 const [formData, setFormData] = useState({
  username:'',
  password:''
 })
  const navigate = useNavigate();

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate('/homepage')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="username">Username </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </p>

          <button type="submit">Log In</button>
          <Link to="/signup">Signup</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;


