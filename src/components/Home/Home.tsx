import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.homeSection}>
        <h1>Home</h1>
        <p>Welcome to the Book API App</p>
        <p>
          Use the search bar to find books:{" "}
          <Link to="/books/search">Search</Link>
        </p>
      </section>
    </div>
  );
}
export default Home;
