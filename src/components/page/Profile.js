import React, { Component } from 'react';
import GetItem from './GetItem';
import undrawLanding from '../assets/undraw-landing.png';
import { Row, Col, Button } from 'react-bootstrap';

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
        <Row>
          <div className="bg-img">
            <Row>
              <Col sm={7}>
                <div className="landing-text">
                  <h1>Oh Hai!</h1>
                  <h2 className="text-muted mt-4">
                    Halo nama saya {this.state.login} seorang developer dan
                    pekerja keras
                  </h2>
                  <Button variant="primary" className="mt-2">
                    Kontak Saya
                  </Button>
                </div>
              </Col>
              <Col sm={4}>
                <div className="undraw-img">
                  <img src={undrawLanding} alt="undraw-cartoon" />
                </div>
              </Col>
            </Row>
          </div>
        </Row>
        {this.state.users.map((user) => (
          <GetItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Profile;
