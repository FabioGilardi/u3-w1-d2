import SingleBook from "./SingleBook";

const BookList = (propsObj) =>
  propsObj.genre.map((element) => {
    return <SingleBook book={element} />;
  });

export default BookList;
