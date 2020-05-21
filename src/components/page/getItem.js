import React, { Component } from 'react';

class getItem extends Component {
  render() {
    const { id, login, bio } = this.props.user;
    return (
      <div>
        <p> {id} </p>
        <p> {login} </p>
        <p> {bio} </p>
      </div>
    );
  }
}

export default getItem;
