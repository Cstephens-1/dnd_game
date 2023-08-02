import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup({setCurrentUser}) {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
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
          setCurrentUser(null)
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <div>
        <label>Username</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
          <label>firstname</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <label>lastname</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
        <p><Link to="/">Log In</Link></p>
      </form>
      </div>
    </div>
  )
}

export default Signup
