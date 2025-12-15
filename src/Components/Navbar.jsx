import { Link } from "react-router-dom";
import "./Components/css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Book Explorer</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
      </div>
    </nav>
  );
}
