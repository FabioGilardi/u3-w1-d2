import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHDxISEBAVFBIWDxcPGRcXEBAVFhAXFREWIhYSFxMYHSggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgEBQYCAwH/xABNEAABAwMABQcGCQkECwAAAAABAAIDBAURBgcSITETIkFRYYGRFDIzcaHBQkNScoKDkrHRI1RVYmWTosLSFVNz8AgWJSY0NXWEo7Ph/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARfOSUR+cQOnecLgNI9b1usrixjnVEg3YiALQerbO7wygkNFzGhekk2k8Tpn0T6aPdsF7wXSjrDcDA7V06AiIgIiICIiAiIgIiICIiAiIgIiICIiAiKNtZOtCLRcOgp8S1eMYzlkPa7rPYg7m43eC2FgmlYwvcGNBdgvJ6goh0x1tT10zqW0N3AkGcjJOOJbnc1v6xUZyVdVpNK6qq6ghrBsOmd8HOfycYHFxycAfcsKpuBqAKekjcyIkDZHOknd0GQjj80bggy7neJC5zpquSpnILCeVfyTAeIz8PuwPWpA1T6tWXYCsrY38ntB0bCNhsh68cSzwyt7qt1VttzRUXCJj5iA5kTm7Qh7XdBd2dCl1rdkYHDGPUg/I2iMAAYAAGOgBe0RAREQEREBERAWoN/g8tNEXgT8iJw07tppcRu7Rj2rZTzCHGelwYO0lR1a9HodMZbjUy7Qca3kYJWO2ZIRTs2duN/wA/a7CgkpFHs1Lf7PzYJ6atjHDlmujlx2kHB9awpLnpRPubQ0sfRtGQOA/jQSesOouUNL6SeNnzpGN+8qO2aF3m+/8AMbsY4zxiphs5HVt4HvWxp9UFqZ58UkruuSeUk+BCDtKe5Q1Xo5o3/NkY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"
            alt="logo"
            width={"60px"}
            className="me-2"
          ></img>
          EpiHistory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            <Form inline className="ms-auto">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" variant="secondary">
                    Browse
                  </Button>
                </Col>
              </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
