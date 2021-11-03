import React from "react";
import styles from "./footer.module.css";
import BlackLogo from "../images/maamour-black-logo.png";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src={BlackLogo}
          alt="شعار معمور"
          className={styles.BlackLogo}
        ></img>
        <h3 className={styles.title}>
          مسجد <span className={styles.titleCustom}>معمور</span>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
