import React from "react";
import styles from "./Header.module.css";
import MaamourLogo from "../images/maamourLogo.png";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>
          مسجد <span className={styles.titleCustom}>معمور</span>
        </h1>
        <a className={styles.titleLink} href="/home">
          <img
            src={MaamourLogo}
            alt="شعار معمور"
            className={styles.maamourLogo}
          ></img>
        </a>
      </header>
    </div>
  );
}

export default Header;
