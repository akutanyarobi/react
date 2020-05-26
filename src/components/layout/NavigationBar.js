import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Fetchgit</Navbar.Brand>
            <div className="d-flex flex-row-reverse">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
