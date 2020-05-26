import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <h3 style={customCss}>Footer</h3>
      </div>
    );
  }
}

const customCss = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  marginTop: '30px',
  fontFamily: 'Arial',
};

export default Footer;
