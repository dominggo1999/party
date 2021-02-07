import React, { useState } from 'react';

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  return (
    <div>
      <div className="container">
        <form
          className="auth"
          onSubmit={handleSubmit}
        >
          <h5>Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
