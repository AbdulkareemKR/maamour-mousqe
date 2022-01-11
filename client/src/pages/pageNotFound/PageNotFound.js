import React from "react";
import styles from "./pageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span className={styles.customText}>... </span>قريبا
      </p>
    </div>
  );
}

export default PageNotFound;
