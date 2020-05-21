import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h3 style={customCss}>Navbar</h3>
      </div>
    );
  }
}

const customCss = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
};

export default Navbar;
