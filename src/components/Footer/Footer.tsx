import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        coded by: <a href="https://github.com/hillelBA">Hillel</a> © 2021 Book
        API App
      </p>
    </div>
  );
}
export default Footer;
