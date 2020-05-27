import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UndrawNotFound from '../assets/undraw-not-found.png';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <img src={UndrawNotFound} alt="undraw-not-found" />
        <div className="text-center">
          <h2>Maaf Halaman Tidak Tersedia</h2>
        </div>
        <div className="row justify-content-center mt-4">
          <Button variant="primary" href="/">
            Halaman Awal
          </Button>
        </div>
      </div>
    );
  }
}

export default NotFound;
