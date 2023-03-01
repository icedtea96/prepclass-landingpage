// import logo from './logo.svg';
import './App.css';
import { Container, Col } from 'reactstrap';
import Navbar from './Components/Navbar';
import image from './Assets/fire-logic.jpg';

function App() {
  return (
    <>
      <Navbar />
      <div className='background'>
        <Container>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <div>
              <img src={image} className="float-start" alt="" />
              <h1>Hello world</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique ut quibusdam dignissimos non voluptatum magnam? Alias eum libero corrupti, qui consequatur itaque sint unde dolor perferendis magni pariatur quod.</p>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default App;
