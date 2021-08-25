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
        Home
      </NavLink>
      <NavLink
        to="/1"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Redux
      </NavLink>
      <NavLink
        to="/training"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Training
      </NavLink>
    </nav>
  );
}
