import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';

class GetItem extends Component {
  render() {
    const { bio, nama_projek, code_branch, code_star } = this.props.user;
    return (
      <div className="landing-card">
        <Card>
          <Card.Body>
            <Card.Title>{nama_projek}</Card.Title>
            <Card.Text>{bio}</Card.Text>
            <Badge variant="light" className="mr-2">
              <i className="fas fa-code-branch"> {code_branch}</i>
            </Badge>
            <Badge variant="light">
              <i className="fas fa-star" /> {code_star}
            </Badge>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GetItem;
