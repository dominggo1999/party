import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import './style/style.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={Dashboard}
          />
          <Route
            path="/project/:id"
            component={ProjectDetails}
          />
          <Route
            path="/signin"
            component={SignIn}
          />
          <Route
            path="/signup"
            component={SignUp}
          />
          <Route
            path="/create-party"
            component={CreateProject}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
