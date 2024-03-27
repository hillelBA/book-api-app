import styles from "./BooksList.module.css";
import BookSimpleDisplay from "./BookSimpleDisplay";
import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../../types";

function BooksList(props: { page: number; setPage: any; search: string }) {
  const [books, setBooks] = useState<Book[]>([]);
  const { page, setPage, search } = props;

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  async function fetchBooks(page: number) {
    try {
      const response = await axios.get(
        search +
          "&maxResults=12&startIndex=" +
          (page - 1) * 12 +
          "&langRestrict=en"
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  function handleNext() {
    setPage(page + 1);
  }

  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function pageSelector() {
    return (
      <div>
        <button onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  }

  const displayBooks = () => {
    return books.map((book: Book) => (
      <BookSimpleDisplay
        key={book.id}
        styles={styles}
        id={book.id}
        title={book.volumeInfo.title}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
      />
    ));
  };

  return (
    <div className={styles.wrapper}>
      {pageSelector()}
      <div className={styles.speakers_grid}>
        <ul>{books.length > 0 ? displayBooks() : <h1>Loading...</h1>}</ul>
      </div>
      {pageSelector()}
    </div>
  );
}

export default BooksList;
