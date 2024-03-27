import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
function NavBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const openNav = document.querySelector("#click");
    const nav = document.querySelector("ul");
    size();
    openNav?.addEventListener("click", () => {
      setOpen(!open);
      nav?.classList.toggle(styles.open);
    });
  }, []);
  onresize = () => {
    size();
  };
  function size() {
    if (window.innerWidth <= 480) {
      const openNav = document.querySelector("#click");
      const nav = document.querySelector("ul");
      const handleClickOutside = (event: any) => {
        if (
          nav &&
          !nav.contains(event.target) &&
          openNav &&
          !openNav.contains(event.target)
        ) {
          nav.classList.remove(styles.open);
        }
      };

      document.addEventListener("click", handleClickOutside);
    } else {
      const nav = document.querySelector("ul");
      nav?.classList.remove(styles.open);
    }
  }

  return (
    <div className={styles.navigation}>
      <span id="click" className={styles.opennav}>
        ☰
      </span>
      <ul>
        <li className="list">
          <Link to="/">
            <span className={styles.text}>Home</span>
            <span className={styles.icon}>🏠</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/books">
            <span className={styles.text}>Books</span>
            <span className={styles.icon}>📚</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/books/search">
            <span className={styles.text}>Search</span>
            <span className={styles.icon}>🔍</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/about">
            <span className={styles.text}>About</span>
            <span className={styles.icon}>📖</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
