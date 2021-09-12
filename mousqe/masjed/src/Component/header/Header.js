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
        <img src={MaamourLogo} alt="شعار" className={styles.maamourLogo}></img>
      </header>
    </div>
  );
}

export default Header;
