import { Component } from "react";
import Button from "react-bootstrap/Button";

const CommentList = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div className="mb-3" key={comment._id} data-testid="commentlist">
        <p className="mb-1">{comment.author}</p>
        <p className="mb-1">{comment.comment}</p>
        <div className="d-flex align-items-center justify-content-between">
          <span className="mb-1">{comment.rate}</span>
          <Button
            variant="danger"
            className="btn-sm"
            onClick={() => {
              fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" +
                  comment._id,
                {
                  method: "DELETE",
                  headers: {
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWJiOTViMjYxNTAwMTk4YTY5NDAiLCJpYXQiOjE3MDY3OTM5MTMsImV4cCI6MTcwODAwMzUxM30.9ZnvDpFfAY5vfBfeY9LSbAV59AGzLVXbfZQcRg3go8k",
                  },
                }
              )
                .then((response) => {
                  if (response.ok) {
                    return alert("Commento eliminato correttamente");
                  } else throw new Error();
                })
                .catch((err) => {
                  alert("Something went wrong...", err);
                });
            }}
          >
            DEL
          </Button>
        </div>
      </div>
    );
  });
};

export default CommentList;
