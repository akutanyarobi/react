import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/page/Profile';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
