import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const key = "AIzaSyBa1JlHeFGQ36ioFK5844_ECOQagltZQ-s";

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          key +
          "&maxResults=10"
      )
      .then((data) => {
        setResult(data.data.items);
      });
  }

  return (
    <div className="container">
      <br />
      <form
        className="form-inline max-width my-2 my-lg-0 "
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <div className="display-4">Google's Books API</div>
          <br />
          <input
            className="form-control mr-sm-2"
            onChange={handleChange}
            type="text"
            placeholder="Search for you favourite book .."
            aria-label="Search"
            size="135"
          />
          <br />
          <br />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <br />
      <div className="container-fluid">
        {result.map((book) => (
          <div className="text-center" key={book.id}>
            <a href={book.volumeInfo.previewLink}>
              <img
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.title}
                style={{ margin: 5, width: 300, height: 300 }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
