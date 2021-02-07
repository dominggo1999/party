import React, { useState } from 'react';

const SignIn = () => {
  const [userInput, setUserInput] = useState({
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
    <div className="container">
      <form
        className="auth"
        onSubmit={handleSubmit}
      >
        <h5>Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            autoComplete="username"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
