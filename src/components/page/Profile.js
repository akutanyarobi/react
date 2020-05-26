import React, { Component } from 'react';
import GetItem from './GetItem';
import undrawLanding from '../assets/undraw-landing.png';
import { Row, Col, Button } from 'react-bootstrap';

class Profile extends Component {
  state = {
    users: [
      {
        id: 1,
        nama_projek: 'GUI Tkinter',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
        code_branch: 20,
        code_star: 60,
      },
      {
        id: 2,
        nama_projek: 'Machine Learning',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
        code_branch: 20,
        code_star: 60,
      },
      {
        id: 3,
        nama_projek: 'Hospital App',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
        code_branch: 20,
        code_star: 60,
      },
      {
        id: 4,
        nama_projek: 'Lorem Ipsum Generator',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
        code_branch: 20,
        code_star: 60,
      },
      {
        id: 5,
        nama_projek: 'Boilerplate Node',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
        code_branch: 20,
        code_star: 60,
      },
      {
        id: 6,
        nama_projek: 'Golang Gorigin',
        bio:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eligendi, autem voluptatibus quo provident natus unde consequatur optio consequuntur.',
        code_branch: 20,
        code_star: 60,
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
        <Col sm={12}>
          <h1 className="text-center mt-5 bio">Bio</h1>
          <h4 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            suscipit pariatur illum labore, quidem, quo praesentium dignissimos
            recusandae voluptatibus similique iste ullam dicta ducimus eaque,
            sunt cum architecto deserunt aperiam?
          </h4>
        </Col>
        <Row>
          {this.state.users.map((user) => (
            <Col sm={4}>
              <GetItem key={user.id} user={user} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Profile;
