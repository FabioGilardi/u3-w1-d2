import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  // state = {
  //   selected: false,
  // };

  // showSelectedBook = () => {
  //   if (this.state.selected === false) {
  //     this.setState({
  //       selected: true,
  //     });
  //   } else {
  //     this.setState({
  //       selected: false,
  //     });
  //   }
  // };

  render() {
    return (
      <Col key={this.props.book.asin} sm={6} md={4} lg={3}>
        <Card
          className={
            this.props.book.asin === this.props.bookAsin
              ? "h-100 shadow border border-3 border-warning"
              : "h-100 shadow"
          }
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            height={"300px"}
            onClick={(e) => {
              this.props.showSelectedBook(this.props.book.asin);
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.book.title}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Text className="m-0">{this.props.book.price} €</Card.Text>
              <Button variant="secondary">Add to Cart</Button>
            </div>
            {/* {this.state.selected && (
              <CommentArea bookId={this.props.book.asin} />
            )} */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
