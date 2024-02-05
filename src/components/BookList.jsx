import { Component } from "react";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    bookTitleInput: "",
    selected: false,
    bookAsin: "",
  };

  showSelectedBook = (bookasin) => {
    if (this.state.selected === false) {
      this.setState({
        selected: true,
      });
    }
    // else {
    //   this.setState({
    //     selected: false,
    //   });
    // }
    this.setState({
      bookAsin: bookasin,
    });
  };

  render() {
    return (
      <>
        <Col md={10} lg={10}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Are you looking for something in particular?
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here..."
                value={this.state.bookTitleInput}
                onChange={(e) => {
                  this.setState({
                    ...this.state.bookTitleInput,
                    bookTitleInput: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={4}>
          <>
            <h4 className="text-center">Comment Area</h4>
            {this.state.selected && (
              <CommentArea bookAsin={this.state.bookAsin} />
            )}
          </>
        </Col>
        <Col md={8}>
          <Row className="gy-2">
            {this.props.genre
              .filter((element) => {
                return element.title
                  .toLowerCase()
                  .includes(this.state.bookTitleInput);
              })
              .map((book, i) => {
                return (
                  <SingleBook
                    book={book}
                    key={i}
                    selected={this.state.selected}
                    showSelectedBook={this.showSelectedBook}
                    bookAsin={this.state.bookAsin}
                  />
                );
              })}
          </Row>
        </Col>
      </>
    );
  }
}

export default BookList;
