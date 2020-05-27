import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';

class GetItem extends Component {
  render() {
    const { bio, nama_projek, code_branch, code_star } = this.props.user;
    return (
      <div className="landing-card">
        <Card>
          <a id="a-none" href="https://www.w3schools.com">
            <Card.Body>
              <Card.Title>{nama_projek}</Card.Title>
              <Card.Text>{bio}</Card.Text>
              <Badge variant="light" className="mr-2">
                <i className="fas fa-code-branch" /> {code_branch}
              </Badge>
              <Badge variant="light">
                <i className="fas fa-star" /> {code_star}
              </Badge>
            </Card.Body>
          </a>
        </Card>
      </div>
    );
  }
}

export default GetItem;
