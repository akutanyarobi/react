import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'Robi Hamdani',
      bio:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci, excepturi nesciunt eius delectus dolore deleniti a fuga ut! At.',
    };
  }
  render() {
    return (
      <div>
        <h1>ini adalah state</h1>
        <p>Nama : {this.state.login}</p>
        <p>bio: {this.state.bio}</p>
      </div>
    );
  }
}

export default Profile;
