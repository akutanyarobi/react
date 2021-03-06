import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/page/Profile';
import NotFound from './components/page/NotFound';
import Footer from './components/layout/Footer';
import NavigationBar from './components/layout/NavigationBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context/github/Githubstate';

const App = () => {
  return (
    <GithubState>
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </GithubState>
  );
};

export default App;
