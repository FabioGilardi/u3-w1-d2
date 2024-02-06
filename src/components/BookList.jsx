import { Component, useState } from "react";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommentArea from "./CommentArea";

const BookList = ({ genre }) => {
  // state = {
  //   bookTitleInput: "",
  //   selected: false,
  //   bookAsin: "",
  // };

  const [bookTitleInput, setbookTitleInput] = useState("");
  const [selected, setSelected] = useState(false);
  const [bookAsin, setBookAsin] = useState("");

  const showSelectedBook = (bookasin) => {
    if (this.state.selected === false) {
      // this.setState({
      //   selected: true,
      // });
      setSelected(true);
    }
    // else {
    //   this.setState({
    //     selected: false,
    //   });
    // }
    // this.setState({
    //   bookAsin: bookasin,
    // });
    setBookAsin(bookasin);
  };

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
              value={bookTitleInput}
              onChange={(e) => {
                // this.setState({
                //   ...this.state.bookTitleInput,
                //   bookTitleInput: e.target.value,
                // });
                setbookTitleInput(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col md={4}>
        <>
          <h4 className="text-center">Comment Area</h4>
          {selected && <CommentArea bookAsin={bookAsin} />}
        </>
      </Col>
      <Col md={8}>
        <Row className="gy-2">
          {genre
            .filter((element) => {
              return element.title.toLowerCase().includes(bookTitleInput);
            })
            .map((book, i) => {
              return (
                <SingleBook
                  book={book}
                  key={i}
                  selected={selected}
                  showSelectedBook={showSelectedBook}
                  bookAsin={bookAsin}
                />
              );
            })}
        </Row>
      </Col>
    </>
  );
};

export default BookList;
