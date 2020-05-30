import React, { Component } from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class GetItem extends Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.github.com/users/iamshaunjp/repos?per_page=6&sort=created:asc`
      )
      .then((res) => {
        const repos = res.data;
        this.setState({ repos });
      });
  }

  render() {
    return (
      <div className="landing-card">
        <Row>
          {this.state.repos.map((repo) => (
            <Col sm={4}>
              <Card className="mt-3">
                <Card.Body>
                  <a id="a-none" href={repo.html_url}>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                    <Badge variant="light" className="mr-2">
                      <i className="fas fa-code-branch" /> {repo.forks_count}
                    </Badge>
                    <Badge variant="light">
                      <i className="fas fa-star" /> {repo.stargazers_count}
                    </Badge>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default GetItem;
