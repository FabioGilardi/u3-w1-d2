import { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddComment = ({ bookId }) => {
  // state = {
  //   commentForm: {
  //     comment: "",
  //     rate: "1",
  //     elementId: this.props.bookId,
  //   },
  // };

  const [commentForm, setCommentForm] = useState({
    comment: "",
    rate: "1",
    elementId: bookId,
  });

  const publishComment = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWJiOTViMjYxNTAwMTk4YTY5NDAiLCJpYXQiOjE3MDY3OTM5MTMsImV4cCI6MTcwODAwMzUxM30.9ZnvDpFfAY5vfBfeY9LSbAV59AGzLVXbfZQcRg3go8k",
        "content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(commentForm),
    })
      .then((response) => {
        if (response.ok) {
          // this.setState({
          //   commentForm: {
          //     comment: "",
          //     rate: "1",
          //   },
          // });
          setCommentForm({
            comment: "",
            rate: "1",
            elementId: bookId,
          });
          return alert("Commento pubblicato correttamente");
        } else throw new Error();
      })
      .catch((err) => {
        alert("Something went wrong...", err);
      });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.commentForm.elementId !== this.props.bookId) {
  //     this.setState({
  //       commentForm: {
  //         ...this.state.commentForm,
  //         elementId: this.props.bookId,
  //       },
  //     });
  //   }
  // }

  useEffect(() => {
    setCommentForm({
      ...commentForm,
      elementId: bookId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  return (
    <Form className="mt-4" onSubmit={publishComment}>
      <Form.Group className="mb-3">
        <Form.Label>Vote this book</Form.Label>
        <Form.Select
          aria-label="Default select example"
          required
          onChange={(e) => {
            // this.setState({
            //   commentForm: {
            //     ...this.state.commentForm,
            //     rate: e.target.value,
            //   },
            // });
            setCommentForm({
              ...commentForm,
              rate: e.target.value,
            });
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Write your opinion here</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          value={commentForm.comment}
          onChange={(e) => {
            // this.setState({
            //   commentForm: {
            //     ...this.state.commentForm,
            //     comment: e.target.value,
            //   },
            // });
            setCommentForm({
              ...commentForm,
              comment: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Button variant="secondary" className="mb-4" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
