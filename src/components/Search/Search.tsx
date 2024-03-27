import React, { useState } from "react";
import styles from "./Search.module.css";

function Search(props: { setSearch: (str: string) => void }) {
  const [searchInput, setSearchInput] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");

  const handleAdvancedSearch = () => {
    setAdvancedSearch(!advancedSearch);
    if (advancedSearch) {
      setTitle("");
      setAuthor("");
      setPublisher("");
      setCategory("");
    }
  };
  const handleSearch = () => {
    let searchURL = "https://www.googleapis.com/books/v1/volumes?q=";

    if (advancedSearch) {
      if (title) {
        searchURL += `${encodeURIComponent(title.trim())}+`;
      }
      if (author) {
        searchURL += `inauthor:${encodeURIComponent(author.trim())}+`;
      }
      if (publisher) {
        searchURL += `inpublisher:${encodeURIComponent(publisher.trim())}+`;
      }
      if (category) {
        searchURL += `subject:${encodeURIComponent(category.trim())}+`;
      }
      if (searchURL.endsWith("+")) searchURL = searchURL.slice(0, -1);
    } else {
      const searchQuery = encodeURIComponent(searchInput.trim());
      if (searchQuery == "") {
        return;
      }
      searchURL += searchQuery;
    }

    props.setSearch(searchURL);
    console.warn(searchURL);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchButtons}>
        <button
          type="submit"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>

        <button
          type="button"
          onClick={() => {
            handleAdvancedSearch();
          }}
        >
          {advancedSearch ? "Simple Search" : "Advanced Search"}
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        id="simpleSearch"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyPress}
        style={advancedSearch ? { display: "none" } : { display: "block" }}
      />

      {advancedSearch && (
        <div className={styles.advancedSearchContainer}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default Search;
