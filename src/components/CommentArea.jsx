import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";

const CommentArea = ({ bookAsin }) => {
  // state = {
  //   comments: [],
  //   isLoading: true,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const commentFetch = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + bookAsin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWJiOTViMjYxNTAwMTk4YTY5NDAiLCJpYXQiOjE3MDY3OTM5MTMsImV4cCI6MTcwODAwMzUxM30.9ZnvDpFfAY5vfBfeY9LSbAV59AGzLVXbfZQcRg3go8k",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        // this.setState({
        //   comments: data,
        //   isLoading: false,
        // });
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Something went wrong...", err);
      });
  };

  // componentDidMount() {
  //   commentFetch();
  // }

  useEffect(() => {
    commentFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookAsin]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.bookAsin !== this.props.bookAsin) {
  //     this.commentFetch();
  //   }
  // }

  return (
    <div>
      {isLoading && <Loading />}
      <AddComment bookId={bookAsin} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentArea;
