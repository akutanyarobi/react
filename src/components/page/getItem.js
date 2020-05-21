import React, { Component } from 'react';

class GetItem extends Component {
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

export default GetItem;
