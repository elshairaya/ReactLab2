import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../Pages/css/BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const description =
    typeof book.description === "string"
      ? book.description
      : book.description?.value;

  return (
    <div className="book-details">
      <Link to="/books">Back to Books</Link>

      <h1>{book.title}</h1>

      {book.covers && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
        />
      )}

      <p>{description || "No description available."}</p>
    </div>
  );
}
