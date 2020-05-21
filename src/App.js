import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/page/Profile';
import Footer from './components/layout/Footer';
import NavigationBar from './components/layout/NavigationBar';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Profile />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
