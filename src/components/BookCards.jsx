import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import books from "../data/history.json";

const BookCards = () => {
  return books.map((book) => {
    return (
      <Col key={book.asin}>
        <Card className="h-100 shadow">
          <Card.Img variant="top" src={book.img} height={"300px"} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{book.title}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Text className="m-0">{book.price} €</Card.Text>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

export default BookCards;
