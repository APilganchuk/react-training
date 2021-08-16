import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Main
      </NavLink>
      <NavLink
        to="/1"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        BasicsRedux
      </NavLink>
      <NavLink
        to="/books"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Books
      </NavLink>
    </nav>
  );
}
