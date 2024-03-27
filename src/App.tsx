import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import BookList from "./components/BooksList/BooksList";
import BookFullDisplay from "./components/BooksList/BookFullDisplay";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(
    "https://www.googleapis.com/books/v1/volumes?q=dev"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (
      search === "https://www.googleapis.com/books/v1/volumes?q=" ||
      search === "https://www.googleapis.com/books/v1/volumes?q=dev"
    ) {
      setSearch("https://www.googleapis.com/books/v1/volumes?q=dev");
    } else {
      navigate("/books");
    }
  }, [search]);

  return (
    <>
      <NavBar />
      <main>
        <header>
          <h1>Book API App</h1>
          <p>Book API App</p>
        </header>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={<BookList page={page} setPage={setPage} search={search} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/books/search"
            element={<Search setSearch={setSearch} />}
          />
          <Route path="/books/:id" element={<BookFullDisplay />} />
          <Route
            path="/*"
            element={
              <h1>
                <Link to="/">404</Link>
              </h1>
            }
          />
        </Routes>
        
      </main>
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
