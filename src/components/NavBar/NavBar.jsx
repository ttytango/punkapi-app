import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <ul className={styles.navLinkList}>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/beers">
                <li>Beers</li>
            </Link>
        </ul>
    </nav>
  );
};

export default NavBar;
