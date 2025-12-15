import "../Pages/css/Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Book Explorer</h1>

      <img
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
        alt="Books"
      />

      <p>Browse books and view details using Open Library API.</p>
    </div>
  );
}
