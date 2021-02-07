import React, { useState } from 'react';

const SignIn = () => {
  const [userInput, setUserInput] = useState({
    title: '',
    content: '',
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
        <h5>Create Party</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Party Content</label>
          <textarea
            name="content"
            id="content"
            onChange={handleChange}
            cols="30"
            rows="10"
          >
          </textarea>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
