import React from "react";
import styles from "./Header.module.css";
import MaamourLogo from "../images/maamourLogo.png";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={MaamourLogo} alt="شعار" className={styles.maamourLogo}></img>
      </header>
    </div>
  );
}

export default Header;
