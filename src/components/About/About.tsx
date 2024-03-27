import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>This is a book app</p>
      <p>
        i chose to create this app about books because i love reading books, and
        i wanted to create an app that would help me find books to read.
      </p>
      <p>
        This app uses the Google Books API to fetch books and display them to
        the user.
      </p>
      <p>
        The user can search for books by title, author, or any keyword and view
        the results.
      </p>
      <p>
        This app was created by <a href="https://github.com/hillelBA">Hillel</a>{" "}
        ©2024 Book API App
      </p>
    </div>
  );
}
export default About;
