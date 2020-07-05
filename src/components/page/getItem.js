import React from 'react';
import GithubContext from '../../context/github/GithubContext';
import { Card, Badge, Row, Col } from 'react-bootstrap';

const GetItem = ({ repos }) => {
  return (
    <div>
      <Row>
        {/* pertama tambahkan parameter index/item */}
        {repos.map((repo) => (
          <Col sm={4} key={repo.id}>
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
};

export default GetItem;
