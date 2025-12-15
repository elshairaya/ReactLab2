import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Pages/css/Books.css";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=programming")
      .then((res) => setBooks(res.data.docs))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="books">
      <h1>Books</h1>

      {books.map((book) => {
        const id = book.key.split("/").pop();

        return (
          <div className="book-card" key={book.key}>
            <h3>
              <Link to={`/books/${id}`}>{book.title}</Link>
            </h3>

            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            )}

            <p>
              Author:{" "}
              {book.author_name ? book.author_name.join(", ") : "Unknown"}
            </p>
          </div>
        );
      })}
    </div>
  );
}
