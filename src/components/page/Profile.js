import React, { Component } from 'react';
import GetItem from './getItem';

class Profile extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'mojombo',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
      },
      {
        id: 2,
        login: 'defunkt',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
      },
      {
        id: 3,
        login: 'pjhyett',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <GetItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Profile;
