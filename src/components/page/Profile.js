import React, { useContext } from 'react';
import GetItem from './GetItem';
import undrawLanding from '../assets/undraw-landing.png';
import { Row, Col, Button } from 'react-bootstrap';
import GithubContext from '../../context/github/GithubContext';

const Profile = () => {
  // const [text, setText] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       'https://api.github.com/users/iamshaunjp/repos?per_page=6&sort=created:asc'
  //     );

  //     setText(res.data);
  //   };

  //   fetchData();
  // }, []);

  // console.log(text);

  const githubContext = useContext(GithubContext);

  const { repos } = githubContext;

  return (
    <div>
      <Row>
        <div className="bg-img">
          <Row>
            <Col sm={7}>
              <div className="landing-text">
                <h1>Oh Hai!</h1>
                <h2 className="text-muted mt-4">
                  Halo nama saya seorang developer dan pekerja keras
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit
          pariatur illum labore, quidem, quo praesentium dignissimos recusandae
          voluptatibus similique iste ullam dicta ducimus eaque, sunt cum
          architecto deserunt aperiam?
        </h4>
      </Col>
      <GetItem repos={repos} />
    </div>
  );
};

export default Profile;
