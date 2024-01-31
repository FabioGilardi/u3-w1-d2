import { Component } from "react";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class BookList extends Component {
  state = {
    bookTitleInput: "",
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

        {this.props.genre
          .filter((element) => {
            return element.title
              .toLowerCase()
              .includes(this.state.bookTitleInput);
          })
          .map((book, i) => {
            return <SingleBook book={book} key={i} />;
          })}
      </>
    );
  }
}

export default BookList;
