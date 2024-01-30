import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = () => {
  return (
    <Container fluid className="mt-5 bg-secondary">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <p className="text-white m-0 py-3">Created by ©Fabio Gilardi</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
