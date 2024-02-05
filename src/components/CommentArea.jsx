import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  commentFetch = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.bookAsin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWJiOTViMjYxNTAwMTk4YTY5NDAiLCJpYXQiOjE3MDY3OTM5MTMsImV4cCI6MTcwODAwMzUxM30.9ZnvDpFfAY5vfBfeY9LSbAV59AGzLVXbfZQcRg3go8k",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        this.setState({
          comments: data,
          isLoading: false,
        });
      })
      .catch((err) => {
        alert("Something went wrong...", err);
      });
  };

  componentDidMount() {
    this.commentFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bookAsin !== this.props.bookAsin) {
      this.commentFetch();
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        <AddComment bookId={this.props.bookAsin} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
