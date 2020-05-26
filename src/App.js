import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/page/Profile';
import Footer from './components/layout/Footer';
import NavigationBar from './components/layout/NavigationBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
