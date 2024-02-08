import {
  fireEvent,
  queryByTestId,
  render,
  screen,
} from "@testing-library/react";
import fantasy from "../data/fantasy.json";

import CustomAlert from "../components/CustomAlert";
import App from "../App";
import CommentArea from "../components/CommentArea";
import CommentList from "../components/CommentList";

describe("General mounting of static elements", () => {
  it("Welcome alert correctly mounts in homepage", () => {
    render(<CustomAlert />);
  });

  it("verify if numbers of book cards is equal to json books", () => {
    render(<App />);
    const bookJson = fantasy;
    const bookCards = screen.getAllByTestId("card");
    expect(bookCards).toHaveLength(bookJson.length);
  });

  it("verify if comment area mounts correctly", () => {
    render(<CommentArea />);
  });

  it("verify if book search works correctly", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Search here...");
    fireEvent.change(input, { target: { value: "dest" } });
    const bookCards = screen.getAllByTestId("card");
    expect(bookCards).toHaveLength(3);
  });

  it("verify if book search works correctly second test", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Search here...");
    fireEvent.change(input, { target: { value: "cnh" } });
    const bookCards = screen.queryAllByTestId("card");
    expect(bookCards).toHaveLength(0);
  });

  it("verify if clicking on a book turns it orange borders", () => {
    render(<App />);
    const books = screen.getAllByRole("img");
    const bookCards = screen.getAllByTestId("card");
    fireEvent.click(books[1]);
    expect(bookCards[0]).toHaveClass("border-warning");
  });

  it("verify if clicking on an another book disactivate orange borders", () => {
    render(<App />);
    const books = screen.getAllByRole("img");
    const bookCards = screen.getAllByTestId("card");
    fireEvent.click(books[1]);
    fireEvent.click(books[2]);
    expect(bookCards[0]).not.toHaveClass("border-warning");
  });

  it("verify if at page load commentlist is not mounted in DOM", () => {
    render(<App />);
    const commentlist = screen.queryByTestId("commentlist");
    expect(commentlist).not.toBeInTheDocument();
  });

  it("verify if clicking on a book shows his comments", async () => {
    render(<App />);
    const books = screen.getAllByRole("img");
    fireEvent.click(books[1]);
    const commentlist = await screen.findAllByTestId("commentlist");
    expect(commentlist[2]).toBeInTheDocument();
  });
});
