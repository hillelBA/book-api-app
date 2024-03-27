import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../../types";
import styles from "./BookFullDisplay.module.css";

function BookFullDisplay() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [bookLoaded, setBookLoaded] = useState(false);

  useEffect(() => {
    setBookLoaded(false);
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
          .finally(() => setBookLoaded(true));
        setBook(response.data as Book);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  // Function to strip HTML tags
  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const bookInfo = () => {
    if (bookLoaded) {
      return (
        <div className={styles.bookInfoContainer}>
          {book != null && (
            <>
              <h2 className={styles.bookTitle}>
                {book.volumeInfo.title || "No title available"}
              </h2>
              <img
                className={styles.bookThumbnail}
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "No thumbnail available"
                }
                alt="Book Thumbnail"
              />
              <p className={styles.bookAuthors}>
                Authors:{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "No authors available"}
              </p>
              <p className={styles.bookPublisher}>
                Publisher:{" "}
                {book.volumeInfo.publisher || "No publisher available"}
              </p>
              <p className={styles.bookPublishedDate}>
                Published Date:{" "}
                {book.volumeInfo.publishedDate || "No published date available"}
              </p>
              <p className={styles.bookDescription}>
                Description:{" "}
                {stripHtmlTags(book.volumeInfo.description) ||
                  "No description available"}
              </p>
              <p className={styles.bookPageCount}>
                Page Count:{" "}
                {book.volumeInfo.pageCount || "Page count not available"}
              </p>
              <p className={styles.bookCategories}>
                Categories:{" "}
                {book.volumeInfo.categories
                  ? book.volumeInfo.categories.join(", ")
                  : "No categories available"}
              </p>
              <p className={styles.bookAverageRating}>
                Average Rating:{" "}
                {book.volumeInfo.averageRating || "No rating available"}
              </p>
              <p className={styles.bookRatingsCount}>
                Ratings Count:{" "}
                {book.volumeInfo.ratingsCount || "No ratings count available"}
              </p>
              <p className={styles.bookLanguage}>
                Language: {book.volumeInfo.language || "No language available"}
              </p>
            </>
          )}
          {book == null && <p>ID : {id} not available</p>}
        </div>
      );
    }
    return <h1>Loading...</h1>;
  };

  return bookInfo();
}

export default BookFullDisplay;
