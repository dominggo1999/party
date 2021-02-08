import React, { useState } from 'react';
import { connect } from 'react-redux';
import createProject from '../../store/actions/projectActions';

const initialInputValue = {
  title: '',
  content: '',
};

const SignIn = (props) => {
  const [userInput, setUserInput] = useState(initialInputValue);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(userInput);
    setUserInput(initialInputValue);
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
            value={userInput.title}
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
            value={userInput.content}
          >
          </textarea>
        </div>
        <button type="submit">Create Party</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
