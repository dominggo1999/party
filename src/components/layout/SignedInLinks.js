import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create-party">New Party</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li>
        <NavLink
          to="/"
          className="user-logo"
        >NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
