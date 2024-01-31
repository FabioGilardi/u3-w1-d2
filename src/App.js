import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import CustomAlert from "./components/CustomAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import history from "./data/history.json";
import scifi from "./data/scifi.json";
import fantasy from "./data/fantasy.json";
import romance from "./data/romance.json";
import horror from "./data/horror.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6}>
              <CustomAlert />
            </Col>
          </Row>
          <Row className="g-3 mt-5 justify-content-center">
            <BookList genre={fantasy} />
          </Row>
        </Container>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
