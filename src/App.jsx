import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookDetails from "./Pages/BookDetails";
import Navbar from "./Components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
