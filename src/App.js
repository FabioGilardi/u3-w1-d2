import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import CustomAlert from "./components/CustomAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCards from "./components/BookCards";
import Col from "react-bootstrap/Col";

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
          <Row xs={1} sm={2} md={3} lg={4} className="g-3 mt-5">
            <BookCards />
          </Row>
        </Container>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
